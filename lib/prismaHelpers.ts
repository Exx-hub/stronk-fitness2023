import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import client from "./prisma";

export const getWods = async () => {
  const wods = await client.wod.findMany({
    include: { exercises: true },
  });

  return wods;
};

export const getWodById = async (id: string) => {
  const wod = await client.wod.findUnique({ where: { id }, include: { exercises: true } });

  if (!wod) {
    return null;
  }

  return wod;
};

export const getUserWods = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  const userId = session.user?.id;

  const userWods = await client.wod.findMany({ where: { userId }, include: { exercises: true } });

  return userWods;
};
