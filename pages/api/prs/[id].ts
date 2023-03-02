import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prId = req.query.id as string;

  if (!prId) {
    return res.status(422).json({ message: "Missing exercise ID." });
  }

  if (req.method === "PATCH") {
    const { weight } = req.body;
    await client.pR.update({ where: { id: prId }, data: { weight } });

    res.status(200).json({ message: "PR updated." });
  }

  if (req.method === "DELETE") {
    await client.pR.delete({ where: { id: prId } });

    res.status(200).json({ message: "PR deleted." });
  }
}
