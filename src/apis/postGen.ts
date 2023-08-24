import { customAxios } from "lib/customAxios";

export const PostGen = async (name: string) => {
  const newGen = new Date().getFullYear() - 2021;

  await customAxios.post("/api/member/generation", {
    accessCode: process.env.REACT_APP_ACCESS_TOKEN,
    githubId: name,
    generation: newGen,
  });

  return newGen;
};
