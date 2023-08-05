import React, { useState } from "react";
import * as S from "./style";

function Member() {
  const IntroMember = [
    {
      memberId: 1,
      name: "정동겸",
      generation: 1,
      subGeneration: "st",
      tech: "Frontend Developer",
      github_url: "https://github.com/jeongdonggyeom",
      github_img_url: "https://avatars.githubusercontent.com/u/80656788?v=4",
    },
    {
      memberId: 2,
      name: "정승민",
      generation: 1,
      subGeneration: "st",
      tech: "Frontend Developer",
      github_url: "https://github.com/jsm8109jsm",
      github_img_url: "https://avatars.githubusercontent.com/u/105054567?v=4",
    },
    {
      memberId: 3,
      name: "홍지민",
      generation: 1,
      subGeneration: "st",
      tech: "Frontend Developer",
      github_url: "https://github.com/J1min",
      github_img_url: "https://avatars.githubusercontent.com/u/80014454?v=4",
    },
    {
      memberId: 4,
      name: "김영민",
      generation: 1,
      subGeneration: "st",
      tech: "Backend Developer",
      github_url: "https://github.com/min050410",
      github_img_url: "https://avatars.githubusercontent.com/u/45661217?v=4",
    },
    {
      memberId: 5,
      name: "이현준",
      generation: 1,
      subGeneration: "st",
      tech: "Backend Developer",
      github_url: "https://github.com/leehj050211",
      github_img_url: "https://avatars.githubusercontent.com/u/80656849?v=4",
    },
    {
      memberId: 6,
      name: "권세원",
      generation: 2,
      subGeneration: "nd",
      tech: "Frontend Developer",
      github_url: "https://github.com/5ewon",
      github_img_url: "https://avatars.githubusercontent.com/u/101105694?v=4",
    },
    {
      memberId: 7,
      name: "박우빈",
      generation: 2,
      tech: "Frontend Developer",
      subGeneration: "nd",
      github_url: "https://github.com/Ubinquitous",
      github_img_url: "https://avatars.githubusercontent.com/u/102154880?v=4",
    },
    {
      memberId: 8,
      name: "김호현",
      generation: 2,
      subGeneration: "nd",
      tech: "Backend Developer",
      github_url: "https://github.com/qlido",
      github_img_url: "https://avatars.githubusercontent.com/u/67864410?v=4",
    },
    {
      memberId: 9,
      name: "이창보",
      generation: 2,
      subGeneration: "nd",
      tech: "Backend Developer",
      github_url: "https://github.com/jacobhboy",
      github_img_url: "https://avatars.githubusercontent.com/u/101192100?v=4",
    },
    {
      memberId: 10,
      name: "김시연",
      generation: 3,
      subGeneration: "rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/kimsiyeon0223",
      github_img_url: "https://avatars.githubusercontent.com/u/128461588?v=4",
    },
    {
      memberId: 11,
      name: "김영은",
      generation: 3,
      subGeneration: "rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/zeroeuni",
      github_img_url: "https://avatars.githubusercontent.com/u/128370837?v=4",
    },
    {
      memberId: 12,
      name: "전영현",
      generation: 3,
      subGeneration: "rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/jyh071116",
      github_img_url: "https://avatars.githubusercontent.com/u/128202921?v=4",
    },
    {
      memberId: 13,
      name: "강지원",
      generation: 3,
      subGeneration: "rd",
      tech: "Backend Developer",
      github_url: "https://github.com/J1W0N-1209",
      github_img_url: "https://avatars.githubusercontent.com/u/113921639?v=4",
    },
    {
      memberId: 14,
      name: "오윤찬",
      generation: 3,
      subGeneration: "rd",
      tech: "Backend Developer",
      github_url: "https://github.com/YunChan-Oh",
      github_img_url: "https://avatars.githubusercontent.com/u/91408117?v=4",
    },
    {
      memberId: 15,
      name: "전유진",
      generation: 3,
      subGeneration: "rd",
      tech: "Backend Developer",
      github_url: "https://github.com/jyj1289",
      github_img_url: "https://avatars.githubusercontent.com/u/121763556?v=4",
    },
  ];

  const [currentGeneration, setCurrentGeneration] = useState(1);

  return (
    <S.MemberLayout>
      <S.MemberContainer>
        <S.MemberTitle>우리 멤버들ㅇㅣ다</S.MemberTitle>
        <S.MemberHr />
        <S.MemberMain>
          <S.MemberGrade>
            <S.GradeTitle>Grade</S.GradeTitle>
            <S.GradeButton>
              <S.GradeButton1 onClick={() => setCurrentGeneration(1)}>
                1st
              </S.GradeButton1>
              <S.GradeButton2 onClick={() => setCurrentGeneration(2)}>
                2nd
              </S.GradeButton2>
              <S.GradeButton3 onClick={() => setCurrentGeneration(3)}>
                3rd
              </S.GradeButton3>
              <S.GradeButton4 onClick={() => setCurrentGeneration(4)}>
                4th
              </S.GradeButton4>
              <S.GradeButton5 onClick={() => setCurrentGeneration(5)}>
                5th
              </S.GradeButton5>
            </S.GradeButton>
          </S.MemberGrade>
          <S.Member>
            {IntroMember.map((member, memberId) => (
              <S.MemberMiddle>
                {member.generation === currentGeneration && (
                  <S.MemberProfile key={memberId}>
                    <a
                      href={member.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <S.Profile src={member.github_img_url} />
                    </a>
                    <S.Information>
                      <S.Name>{member.name}</S.Name>
                      <S.Role>
                        {member.generation}
                        {member.subGeneration} | {member.tech}
                      </S.Role>
                    </S.Information>
                  </S.MemberProfile>
                )}
              </S.MemberMiddle>
            ))}
          </S.Member>
        </S.MemberMain>
      </S.MemberContainer>
    </S.MemberLayout>
  );
}

export default Member;
