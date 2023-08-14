import React, { useState } from "react";
import * as S from "./style";

function Member() {
  const introMember = [
    {
      memberId: 1,
      name: "정동겸",
      generation: "1st",
      tech: "Frontend Developer",
      github_url: "https://github.com/jeongdonggyeom",
      github_img_url: "https://avatars.githubusercontent.com/u/80656788?v=4",
      birthMonth: 11,
      birthDay: 22,
    },
    {
      memberId: 2,
      name: "정승민",
      generation: "1st",
      tech: "Frontend Developer",
      github_url: "https://github.com/jsm8109jsm",
      github_img_url: "https://avatars.githubusercontent.com/u/105054567?v=4",
      birthMonth: 2,
      birthDay: 3,
    },
    {
      memberId: 3,
      name: "홍지민",
      generation: "1st",
      tech: "Frontend Developer",
      github_url: "https://github.com/J1min",
      github_img_url: "https://avatars.githubusercontent.com/u/80014454?v=4",
      birthMonth: 10,
      birthDay: 27,
    },
    {
      memberId: 4,
      name: "김영민",
      generation: "1st",
      tech: "Backend Developer",
      github_url: "https://github.com/min050410",
      github_img_url: "https://avatars.githubusercontent.com/u/45661217?v=4",
      birthMonth: 4,
      birthDay: 10,
    },
    {
      memberId: 5,
      name: "이현준",
      generation: "2rd",
      tech: "Backend Developer",
      github_url: "https://github.com/leehj050211",
      github_img_url: "https://avatars.githubusercontent.com/u/80656849?v=4",
      birthMonth: 2,
      birthDay: 11,
    },
    {
      memberId: 6,
      name: "권세원",
      generation: "2nd",
      tech: "Frontend Developer",
      github_url: "https://github.com/5ewon",
      github_img_url: "https://avatars.githubusercontent.com/u/101105694?v=4",
      birthMonth: 4,
      birthDay: 3,
    },
    {
      memberId: 7,
      name: "박우빈",
      generation: "2nd",
      tech: "Frontend Developer",
      github_url: "https://github.com/Ubinquitous",
      github_img_url: "https://avatars.githubusercontent.com/u/102154880?v=4",
      birthMonth: 6,
      birthDay: 27,
    },
    {
      memberId: 8,
      name: "김호현",
      generation: "2nd",
      tech: "Backend Developer",
      github_url: "https://github.com/qlido",
      github_img_url: "https://avatars.githubusercontent.com/u/67864410?v=4",
      birthMonth: 7,
      birthDay: 27,
    },
    {
      memberId: 9,
      name: "이창보",
      generation: "2nd",
      tech: "Backend Developer",
      github_url: "https://github.com/jacobhboy",
      github_img_url: "https://avatars.githubusercontent.com/u/101192100?v=4",
      birthMonth: 7,
      birthDay: 4,
    },
    {
      memberId: 10,
      name: "김시연",
      generation: "3rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/kimsiyeon0223",
      github_img_url: "https://avatars.githubusercontent.com/u/128461588?v=4",
      birthMonth: 2,
      birthDay: 23,
    },
    {
      memberId: 11,
      name: "김영은",
      generation: "3rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/zeroeuni",
      github_img_url: "https://avatars.githubusercontent.com/u/128370837?v=4",
      birthMonth: 1,
      birthDay: 13,
    },
    {
      memberId: 12,
      name: "전영현",
      generation: "3rd",
      tech: "Frontend Developer",
      github_url: "https://github.com/jyh071116",
      github_img_url: "https://avatars.githubusercontent.com/u/128202921?v=4",
      birthMonth: 11,
      birthDay: 16,
    },
    {
      memberId: 13,
      name: "강지원",
      generation: "3rd",
      tech: "Backend Developer",
      github_url: "https://github.com/J1W0N-1209",
      github_img_url: "https://avatars.githubusercontent.com/u/113921639?v=4",
      birthMonth: 12,
      birthDay: 9,
    },
    {
      memberId: 14,
      name: "오윤찬",
      generation: "3rd",
      tech: "Backend Developer",
      github_url: "https://github.com/YunChan-Oh",
      github_img_url: "https://avatars.githubusercontent.com/u/91408117?v=4",
      birthMonth: 8,
      birthDay: 14,
    },
    {
      memberId: 15,
      name: "전유진",
      generation: "3rd",
      tech: "Backend Developer",
      github_url: "https://github.com/jyj1289",
      github_img_url: "https://avatars.githubusercontent.com/u/121763556?v=4",
      birthMonth: 6,
      birthDay: 5,
    },
  ];

  const [currentGeneration, setCurrentGeneration] = useState("1st");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 1월부터 12월까지 0부터 11로 표현되므로 +1
  const currentDay = currentDate.getDate();

  return (
    <S.MemberLayout id="member">
      <S.MemberContainer>
        <S.MemberTitle>우리 멤버들ㅇㅣ다</S.MemberTitle>
        <S.MemberHr />
        <S.MemberMain>
          <S.MemberGrade>
            <S.GradeTitle>Grade</S.GradeTitle>
            <S.GradeButton>
              <S.GradeButton1 onClick={() => setCurrentGeneration("1st")}>
                1st
              </S.GradeButton1>
              <S.GradeButton2 onClick={() => setCurrentGeneration("2nd")}>
                2nd
              </S.GradeButton2>
              <S.GradeButton3 onClick={() => setCurrentGeneration("3rd")}>
                3rd
              </S.GradeButton3>
              <S.GradeButton4 onClick={() => setCurrentGeneration("4th")}>
                4th
              </S.GradeButton4>
              <S.GradeButton5 onClick={() => setCurrentGeneration("5th")}>
                5th
              </S.GradeButton5>
            </S.GradeButton>
          </S.MemberGrade>
          <S.Member>
            {introMember.map((member, memberId) => (
              <S.MemberMiddle key={memberId}>
                {member.generation === currentGeneration && (
                  <S.MemberProfile>
                    {currentMonth === member.birthMonth &&
                      currentDay === member.birthDay && (
                        <S.Birthday src="images/birthday.jpg" />
                      )}

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
                        {member.generation} | {member.tech}
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
