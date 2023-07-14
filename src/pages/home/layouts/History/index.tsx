import React from "react";
import School from "src/assets/school.webp";
import * as S from "./style";

function HistoryPage() {
  const { title, introduce1 } = {
    title: "학교와 함께 역사를 써내려갑니다.",
    introduce1: "대충 소개하는 글",
  };

  return (
    <S.HistoryLayout>
      <S.HistoryContainer>
        <S.HistoryText>
          <S.HistoryTitle>{title}</S.HistoryTitle>
          <S.HistoryIntroduce>{introduce1}</S.HistoryIntroduce>
          <S.HistoryImg src={School} />
        </S.HistoryText>
      </S.HistoryContainer>
    </S.HistoryLayout>
  );
}

export default HistoryPage;
