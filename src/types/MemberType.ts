export default interface MemberType {
  memberId: number;
  name: string;
  generation: string;
  tech: "Frontend" | "Backend";
  github_url: string;
  github_img_url: string;
}
