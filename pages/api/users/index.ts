// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/lib/prisma";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  user?: User;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const user = await client.user.create({
      data: {
        email: "alvin@gmail.com",
        name: "alvin acosta",
        password: "123123",
      },
    });

    res.status(200).json({ message: "Create Success", user });
  } catch (err) {
    return res.status(500).json({ message: "failed to create user" });
  }
}
