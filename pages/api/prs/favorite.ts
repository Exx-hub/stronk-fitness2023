import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { favorite, prId } = req.body;

  if (!prId) {
    return res.status(422).json({ message: "PR Id is required." });
  }

  await client.pR.update({ where: { id: prId }, data: { favorite } });

  res.status(200).json({ message: "PR updated." });
}
