import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
// PrismaAdapter stores some set of data when a user signup for the first time in the application. For this case
// it will create a 'User' object and then query the db to create a record for that user. 'User' model should
// have all the required fields that is required for SignUp. You need to go to the documentation of
// @auth/prisma-adapter to see how to design your model.
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing github oauth credentials");
}
// GET and POST are request handlers that are automatically called by Github servers when user try to sign in
export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // called whenever a user signs in. This is not required but there is a bug in next auth where user's id
    // is not attached to session data.
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
