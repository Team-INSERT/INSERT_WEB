import React, { useState } from "react";
import * as S from "./style";

function Member() {
  const IntroMember = [
    {
      id: 1,
      name: "정동겸",
      role: "1st | Frontend Developer",
      img: <img src="imgs/JDG.png" alt="" />,
    },
    {
      id: 1,
      name: "김영민",
      role: "1st | Backend Developer",
      img: <img src="imgs/KYM.png" alt="" />,
    },
    {
      id: 1,
      name: "정승민",
      role: "1st | Frontend Developer",
      img: <img src="imgs/JSM.png" alt="" />,
    },
    {
      id: 1,
      name: "이현준",
      role: "1st | Backend Developer",
      img: <img src="imgs/LHJ.png" alt="" />,
    },
    {
      id: 1,
      name: "홍지민",
      role: "1st | Frontend Developer",
      img: <img src="imgs/HJM.png" alt="" />,
    },
    {
      id: 2,
      name: "권세원",
      role: "2nd | Frontend Developer",
      img: <img src="imgs/KSW.png" alt="" />,
    },
    {
      id: 2,
      name: "김호현",
      role: "2nd | Backend Developer",
      img: <img src="imgs/KHH.png" alt="" />,
    },
    {
      id: 2,
      name: "박우빈",
      role: "2nd | Frontend Developer",
      img: <img src="imgs/POB.png" alt="" />,
    },
    {
      id: 2,
      name: "이창보",
      role: "2nd | Backend Developer",
      img: <img src="imgs/LCB.png" alt="" />,
    },
    {
      id: 3,
      name: "김시연",
      role: "3rd | Frontend Developer",
      img: <img src="imgs/KSY.png" alt="" />,
    },
    {
      id: 3,
      name: "강지원",
      role: "3rd | Backend Developer",
      img: <img src="imgs/KJW.png" alt="" />,
    },
    {
      id: 3,
      name: "김영은",
      role: "3rd | Frontend Developer",
      img: <img src="imgs/KYE.png" alt="" />,
    },
    {
      id: 3,
      name: "오윤찬",
      role: "3rd | Backend Developer",
      img: <img src="imgs/OYC.png" alt="" />,
    },
    {
      id: 3,
      name: "전영현",
      role: "3rd | Frontend Developer",
      img: <img src="imgs/JYH.png" alt="" />,
    },
    {
      id: 3,
      name: "전유진",
      role: "3rd | Backend Developer",
      img: <img src="imgs/JYJ.png" alt="" />,
    },
  ];

  const [currentGrade, setCurrentGrade] = useState("1st");

  const filteredMembers = IntroMember.filter((member) =>
    member.role.includes(currentGrade),
  );

  const FMembers = filteredMembers.filter((member) => member.id === 1);
  const SMembers = filteredMembers.filter((member) => member.id === 2);
  const TMembers = filteredMembers.filter((member) => member.id === 3);

  return (
    <S.MemberLayout>
      <S.MemberContainer>
        <S.MemberTitle>우리 멤버들ㅇㅣ다</S.MemberTitle>
        <S.MemberHr />
        <S.MemberMain>
          <S.MemberGrade>
            <S.GradeTitle>Grade</S.GradeTitle>
            <S.GradeButton>
              <S.GradeButton1 onClick={() => setCurrentGrade("1st")}>
                1st
              </S.GradeButton1>
              <S.GradeButton2 onClick={() => setCurrentGrade("2nd")}>
                2nd
              </S.GradeButton2>
              <S.GradeButton3 onClick={() => setCurrentGrade("3rd")}>
                3rd
              </S.GradeButton3>
              <S.GradeButton4 onClick={() => setCurrentGrade("4th")}>
                4th
              </S.GradeButton4>
              <S.GradeButton5 onClick={() => setCurrentGrade("5th")}>
                5th
              </S.GradeButton5>
            </S.GradeButton>
          </S.MemberGrade>
          <S.Member>
            <S.MemberMiddle>
              <S.Profile1>
                {currentGrade === "1st" &&
                  FMembers.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <S.MemberProfileF>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileF>
                      );
                    }
                    return null;
                  })}
              </S.Profile1>
              <S.Profile2>
                {currentGrade === "1st" &&
                  FMembers.map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <S.MemberProfileB>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileB>
                      );
                    }
                    return null;
                  })}
              </S.Profile2>
              <S.Profile1>
                {currentGrade === "2nd" &&
                  SMembers.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <S.MemberProfileF>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileF>
                      );
                    }
                    return null;
                  })}
              </S.Profile1>
              <S.Profile2>
                {currentGrade === "2nd" &&
                  SMembers.map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <S.MemberProfileB>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileB>
                      );
                    }
                    return null;
                  })}
              </S.Profile2>
              <S.Profile1>
                {currentGrade === "3rd" &&
                  TMembers.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <S.MemberProfileF>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileF>
                      );
                    }
                    return null;
                  })}
              </S.Profile1>
              <S.Profile2>
                {currentGrade === "3rd" &&
                  TMembers.map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <S.MemberProfileB>
                          <S.Profile>{item.img}</S.Profile>
                          <S.Information>
                            <S.Name>{item.name}</S.Name>
                            <S.Role>{item.role}</S.Role>
                          </S.Information>
                        </S.MemberProfileB>
                      );
                    }
                    return null;
                  })}
              </S.Profile2>
            </S.MemberMiddle>
          </S.Member>
        </S.MemberMain>
      </S.MemberContainer>
    </S.MemberLayout>
  );
}

export default Member;
