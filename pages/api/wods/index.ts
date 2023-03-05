import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  if (!name) {
    return res.status(422).json({ message: "All fields required." });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  const wod = await client.wod.create({
    data: {
      name,
      userId: session.user?.id,
    },
  });

  res.status(201).json({ message: "Wod Created!" });
}
