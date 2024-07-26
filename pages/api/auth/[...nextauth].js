import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID;
const githubPwd = process.env.GITHUB_PWD;
const jwtSecret = process.env.JWT_SECRET;

export const authOptions = {

  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubPwd,
    }),
  ],
  secret : jwtSecret
};
export default NextAuth(authOptions); 