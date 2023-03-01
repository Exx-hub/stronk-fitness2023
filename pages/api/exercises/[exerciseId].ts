import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const exerciseId = req.query.exerciseId as string;

  if (!exerciseId) {
    return res.status(422).json({ message: "Missing exercise ID." });
  }

  await client.exercise.delete({ where: { id: exerciseId } });

  res.status(200).json({ message: "Exercise deleted." });
}
