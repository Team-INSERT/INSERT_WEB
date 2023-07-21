import React, { useState } from "react";
import * as S from "./style";

function TimeLine() {
  const dates = ["2023", "2024", "2025", "2026", "2027"];

  const [ClickedDate, setClickedDate] = useState("2023");

  const DateClick = (date: string) => {
    setClickedDate(date);
  };

  return (
    <S.Container>
      <S.Title>TimeLine</S.Title>
      <S.SubTitle>INSERT가 함께한 멋진 시간들을 소개합니다.</S.SubTitle>
      <S.TimeLineBox>
        <S.TimeLine>
          {dates.map((date) => (
            <S.TimeLineItem key={date}>
              <S.TimeLineDate onClick={() => DateClick(date)}>
                {date}
              </S.TimeLineDate>
              <S.TimeLineO />
            </S.TimeLineItem>
          ))}
        </S.TimeLine>
        <S.TimeLineHr />
        {ClickedDate && (
          <S.TimeLineText>
            {ClickedDate === "2023" && (
              <S.TimeLineYear>
                <S.TimeLineContentDate>2023.03</S.TimeLineContentDate>
                <S.TimeLineContent>
                  3월의 어느 날... 인서트 결성
                </S.TimeLineContent>
              </S.TimeLineYear>
            )}
            {ClickedDate === "2024" && (
              <S.TimeLineYear>
                <S.TimeLineContentDate>2024</S.TimeLineContentDate>
                <S.TimeLineContent>텅~</S.TimeLineContent>
              </S.TimeLineYear>
            )}
            {ClickedDate === "2025" && (
              <S.TimeLineYear>
                <S.TimeLineContentDate>2025</S.TimeLineContentDate>
                <S.TimeLineContent>텅~</S.TimeLineContent>
              </S.TimeLineYear>
            )}
            {ClickedDate === "2026" && (
              <S.TimeLineYear>
                <S.TimeLineContentDate>2026</S.TimeLineContentDate>
                <S.TimeLineContent>텅~</S.TimeLineContent>
              </S.TimeLineYear>
            )}
            {ClickedDate === "2027" && (
              <S.TimeLineYear>
                <S.TimeLineContentDate>2027</S.TimeLineContentDate>
                <S.TimeLineContent>텅~</S.TimeLineContent>
              </S.TimeLineYear>
            )}
          </S.TimeLineText>
        )}
      </S.TimeLineBox>
    </S.Container>
  );
}

export default TimeLine;
