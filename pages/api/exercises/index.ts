import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, reps, sets, weight, wodId } = req.body;

  if (!name.trim() || !reps || !sets || !weight || !wodId) {
    return res.status(422).json({ message: "All fields required." });
  }

  if (isNaN(Number(reps)) || isNaN(Number(sets))) {
    return res.status(422).json({ message: "Invalid input." });
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
