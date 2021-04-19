import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
      jwt: true,
  },
  callbacks: {
      session: async (session, user) => {
          session.jwt = user.jwt;
          session.id = user.id;
          return Promise.resolve(session);
      },
      jwt: async(token, user, account) => {
          const isSignIn = user ? true : false;
          if (isSignIn) {
              const response = await
          }
      }
  }
}