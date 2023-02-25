import bcrypt from "bcryptjs";
import client from "@/lib/prisma";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  user?: {
    email: string;
    name: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name, email, password, confirm } = req.body;

  const loweredEmail = email.toLowerCase();

  if (!name || !email || !password || !confirm) {
    return res.status(422).json({ message: "All fields required." });
  }

  const userExists = await client.user.findUnique({ where: { email: loweredEmail } });

  if (userExists) {
    return res.status(409).json({ message: "Email already registered." });
  }

  if (password !== confirm) {
    return res.status(403).json({ message: "Passwords do not match." });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await client.user.create({
      data: {
        email: loweredEmail,
        name,
        password: hashedPassword,
      },
    });

    res
      .status(200)
      .json({ message: "Create Success", user: { email: user.email, name: user.name } });
  } catch (err) {
    return res.status(500).json({ message: "failed to create user" });
  }
}
