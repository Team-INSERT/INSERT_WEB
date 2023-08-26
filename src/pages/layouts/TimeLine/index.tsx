import { useState } from "react";
import * as S from "./style";
import dates from "./data.json";

function TimeLine() {
  const [clickedDate, setClickedDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setClickedDate(date === clickedDate ? null : date);
  };

  return (
    <S.Container id="timeline">
      <S.Title>TimeLine</S.Title>
      <S.SubTitle>INSERT가 함께한 멋진 시간들을 소개합니다.</S.SubTitle>
      <S.TimeLineBox>
        <S.TimeLine>
          {dates.map((dateData) => (
            <S.TimeLineItem key={dateData.year}>
              <S.TimeLineDate
                onClick={() => handleDateClick(dateData.year)}
                isActive={clickedDate === dateData.year}
              >
                {dateData.year}
              </S.TimeLineDate>
              <S.TimeLineO />
            </S.TimeLineItem>
          ))}
        </S.TimeLine>
        <S.TimeLineText>
          {dates.map(
            (dateData) =>
              clickedDate === dateData.year && (
                <S.TimeLineYear key={dateData.year}>
                  <S.TimeLineContentDate>{dateData.year}</S.TimeLineContentDate>
                  {dateData.contents.map((content, index) => (
                    <S.TimeLineContent key={index}>{content}</S.TimeLineContent>
                  ))}
                </S.TimeLineYear>
              ),
          )}
        </S.TimeLineText>
      </S.TimeLineBox>
    </S.Container>
  );
}

export default TimeLine;
