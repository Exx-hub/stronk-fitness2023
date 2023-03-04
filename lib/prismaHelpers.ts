import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

import client from "./prisma";

export const getPrsByUser = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;

  const prs = await client.pR.findMany({ where: { userId } });

  return prs;
};

export const getUserPrs = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id;

  const user = await client.user.findUnique({ where: { id: userId }, include: { PR: true } });

  return user;
};

export const getAllWods = async () => {
  const wods = await client.wod.findMany({
    include: { exercises: true },
  });

  return wods;
};

export const getRandomWod = async () => {
  const wods = await getAllWods();

  const min = 0;
  const max = wods.length - 1;

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  const randomWod = wods[random];

  const user = await client.user.findUnique({ where: { id: randomWod.userId } });

  return { user: user?.name, randomWod };
};

export const getWodById = async (id: string) => {
  const wod = await client.wod.findUnique({ where: { id }, include: { exercises: true } });

  return wod;
};

export const getUserWods = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const userId = session?.user?.id;

  const userWods = await client.wod.findMany({
    where: { userId: userId },
    include: { exercises: true },
  });

  return userWods;
};
