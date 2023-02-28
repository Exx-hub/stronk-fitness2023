import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, reps, sets, weight, wodId } = req.body;

  if (!name || !reps || !sets || !weight || !wodId) {
    return res.status(422).json({ message: "All fields required." });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Forbidden." });
  }

  const exercise = await client.exercise.create({
    data: {
      name,
      reps,
      sets,
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
