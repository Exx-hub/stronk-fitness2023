import bcyrpt from "bcryptjs";
import client from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };

        const loweredEmail = email.toLowerCase();

        const userExists = await client.user.findUnique({ where: { email: loweredEmail } });

        if (!userExists) {
          return null;
        }

        const verified = await bcyrpt.compare(password, userExists.password);

        if (!verified) {
          throw new Error("Passwrd not valid.");
        }

        return userExists;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id;

      return session;
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);

// https://github.com/nextauthjs/next-auth-typescript-example/blob/main/types/next-auth.d.ts
