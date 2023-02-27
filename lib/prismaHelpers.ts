import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession, Session } from "next-auth";
import client from "./prisma";

export const getWods = async () => {
  const wods = await client.wod.findMany({
    include: { exercises: true },
  });

  return wods;
};

export const getWodByUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  // @ts-ignore
  const userId = session.user?.id;

  const userWods = await client.wod.findMany({ where: { userId }, include: { exercises: true } });

  return userWods;
};