import axios from "axios";

export const PostGen = async (name: string) => {
  const newGen = new Date().getFullYear() - 2021;

  await axios.post(`${process.env.REACT_APP_BASEURL}/api/member/generation`, {
    accessCode: process.env.REACT_APP_ACCESS_TOKEN,
    githubId: name,
    generation: newGen,
  });

  return newGen;
};
