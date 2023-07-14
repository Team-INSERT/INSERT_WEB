import React from "react";
import Logo from "assets/logo.svg";
import * as S from "./style";

function HomePage() {
  const { team, code, watch, commit, time } = {
    team: "Team. INSERT",
    code: "168,257+",
    watch: "560,257+",
    commit: "2,358+",
    time: "2,650+",
  };

  return (
    <S.HomePageLayOut>
      <S.HomePageHeader>
        <S.HomePageTitle>{team}</S.HomePageTitle>
        <S.HomePageSubTitle>
          안녕하시와요일단멋진말넣기전에...
        </S.HomePageSubTitle>
        <S.HomePageLogo src={Logo} />
        <S.HomePageHr />
      </S.HomePageHeader>
      <S.HomePageMiddle>
        <S.HomePageCodeSection>
          <S.HomePageCodeText>작성한 코드 라인</S.HomePageCodeText>
          <S.HomePageCode>{code}</S.HomePageCode>
        </S.HomePageCodeSection>
        <S.HomePageWatchSection>
          <S.HomePageWatchText>웹 페이지 조회수</S.HomePageWatchText>
          <S.HomePageWatch>{watch}</S.HomePageWatch>
        </S.HomePageWatchSection>
      </S.HomePageMiddle>
      <S.HomePageMiddle2>
        <S.HomePageCommitSection>
          <S.HomePageCommitText>총 커밋 횟수</S.HomePageCommitText>
          <S.HomePageCommit>{commit}</S.HomePageCommit>
        </S.HomePageCommitSection>
        <S.HomePageTimeSection>
          <S.HomePageTimeText>함께한 시간</S.HomePageTimeText>
          <S.HomePageTime>{time}</S.HomePageTime>
        </S.HomePageTimeSection>
      </S.HomePageMiddle2>
      <S.HomePageFooter>2023년 6월 기준</S.HomePageFooter>
    </S.HomePageLayOut>
  );
}

export default HomePage;
