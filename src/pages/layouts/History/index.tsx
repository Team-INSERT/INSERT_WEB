import * as S from "./style";

function HistoryPage() {
  const { title, introduce1, introduce2 } = {
    title: "학교와 함께 역사를 써내려갑니다.",
    introduce1:
      "INSERT는 2023년 3월에 만들어진 부산소프트웨어마이스터고등학교의 전공동아리입니다.",
    introduce2:
      "학생들의 편리한 학교 생활을 위해, 교내 학생들과 관련된 모든 서비스들을 제공합니다.",
  };

  return (
    <S.HistoryLayout id="history">
      <S.HistoryContainer>
        <S.HistoryText>
          <S.HistoryTitle>{title}</S.HistoryTitle>
          <S.HistoryIntroduce>
            <S.HistoryIntroduce1>{introduce1}</S.HistoryIntroduce1>
            <S.HistoryIntroduce2>{introduce2}</S.HistoryIntroduce2>
          </S.HistoryIntroduce>
          <S.HistoryImg src="images/school.webp" />
        </S.HistoryText>
      </S.HistoryContainer>
    </S.HistoryLayout>
  );
}

export default HistoryPage;
