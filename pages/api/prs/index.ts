import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, weight } = req.body;

  if (!name || !weight) {
    return res.status(422).json({ message: "All fields required." });
  }

  const token = await getToken({ req });

  if (!token) {
    return res.status(401).json({ message: "Forbidden." });
  }

  // i have yet to find out which approach is better, but both does the job.
  // only a question of maybe performance?
  // await client.pR.create({ data: { name, weight, user: { connect: { id: token.id } } } });
  await client.pR.create({ data: { name, weight, userId: token.id } });

  res.status(201).json({ message: "New PR Recorded!" });
}
