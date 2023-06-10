import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const res = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log(user);

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
    CredentialsProvider({
      id: "signup",
      name: "signup",
      async authorize(credentials, req) {
        const res = await fetch("http://127.0.0.1:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: credentials?.name,
            email: credentials?.email,
            password: credentials?.password,
            password_confirmation: credentials?.password_confirmation,
          }),
        });
        const user = await res.json();
        console.log(user);
        if (user && user.status === 201) {
          return user;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      if (token) {
        return token;
      }
    },
  },
};
export default NextAuth(authOptions);
