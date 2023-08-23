import axios from "axios";
import { customAxios } from "lib/customAxios";
import MemberType from "types/MemberType";
import { PostGen } from "./postGen";

interface UserType {
  generation: number;
  login: string;
  avatar_url: string;
  html_url: string;
  id: number;
}

const changeGenString = (GenNum: number): string => {
  if (GenNum === 1 || GenNum === 31) {
    return `${GenNum}st`;
  }
  if (GenNum === 2 || GenNum === 32) {
    return `${GenNum}nd`;
  }
  if (GenNum === 3 || GenNum === 33) {
    return `${GenNum}rd`;
  }
  return `${GenNum}th`;
};

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
