import client from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const wod = await client.wod.create({
    data: {
      name: "The Beast Workout",
      exercises: {
        createMany: {
          data: [
            { name: "Bench Press", sets: 3, reps: 10, weight: "50kg", completed: false },
            {
              name: "Squats",
              sets: 3,
              reps: 10,
              weight: "50kg",
              completed: false,
            },
            { name: "Deadlifts", sets: 3, reps: 10, weight: "50kg", completed: false },
            { name: "Military Press", sets: 3, reps: 10, weight: "50kg", completed: false },
            { name: "Barbell Rows", sets: 3, reps: 10, weight: "50kg", completed: false },
          ],
        },
      },
    },
  });

  res.status(201).json({ message: "Wod Created!" });
}
