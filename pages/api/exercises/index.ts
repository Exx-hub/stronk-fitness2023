import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, reps, sets, weight, wodId } = req.body;

  if (!name || !reps || !sets || !weight || !wodId) {
    return res.status(422).json({ message: "All fields required." });
  }

  await client.exercise.create({
    data: {
      name,
      reps: Number(reps),
      sets: Number(sets),
      weight,
      Wod: {
        connect: {
          id: wodId,
        },
      },
    },
  });

  res.status(201).json({ message: "Exercise Added!" });
}
