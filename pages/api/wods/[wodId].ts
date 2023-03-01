import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const wodId = req.query.wodId as string;

  if (!wodId) {
    return res.status(422).json({ message: "Missing exercise ID." });
  }

  if (req.method === "PATCH") {
    const { name } = req.body;
    await client.wod.update({ where: { id: wodId }, data: { name } });

    res.status(200).json({ message: "WOD name updated." });
  }

  if (req.method === "DELETE") {
    await client.wod.delete({ where: { id: wodId } });

    res.status(200).json({ message: "WOD deleted." });
  }
}
