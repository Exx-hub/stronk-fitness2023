import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { name } = req.body;

  if (!name) {
    return res.status(422).json({ message: "All fields required." });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Forbidden." });
  }

  const wod = await client.wod.create({
    data: {
      name,
      userId: session.user?.id,
    },
  });

  res.status(201).json({ message: "Wod Created!" });
}

// exercises: {
//   createMany: {
//     data: [
//       { name: "Bench Press", sets: 3, reps: 10, weight: "50kg", completed: false },
//       {
//         name: "Squats",
//         sets: 3,
//         reps: 10,
//         weight: "50kg",
//         completed: false,
//       },
//       { name: "Deadlifts", sets: 3, reps: 10, weight: "50kg", completed: false },
//       { name: "Military Press", sets: 3, reps: 10, weight: "50kg", completed: false },
//       { name: "Barbell Rows", sets: 3, reps: 10, weight: "50kg", completed: false },
//     ],
//   },
// },
