import axios from "axios";
import { customAxios } from "lib/customAxios";
import MemberType from "types/MemberType";
import { changeGenString } from "utils/changeGenString";
import { PostGen } from "apis/postGen";

interface UserType {
  generation: number;
  login: string;
  avatar_url: string;
  html_url: string;
  id: number;
}

export const requestMember = async (): Promise<MemberType[]> => {
  const res = await axios.all([
    customAxios.get("/api/member/frontend"),
    customAxios.get("/api/member/backend"),
  ]);

  const memberList = [
    ...res[0].data.map(
      ({ generation, login, avatar_url, html_url, id }: UserType) => ({
        memberId: id,
        name: login,
        generation:
          generation !== null ? changeGenString(generation) : PostGen(login),
        tech: "Frontend Developer",
        github_url: html_url,
        github_img_url: avatar_url,
      }),
    ),
    ...res[1].data.map(
      ({ generation, login, avatar_url, html_url, id }: UserType) => ({
        memberId: id,
        name: login,
        generation:
          generation !== null ? changeGenString(generation) : PostGen(login),
        tech: "Backend Developer",
        github_url: html_url,
        github_img_url: avatar_url,
      }),
    ),
  ];
  return memberList;
};
