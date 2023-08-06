import * as S from "./style";

function HistoryPage() {
  const { title, introduce1, introduce2 } = {
    title: "학교와 함께 역사를 써내려갑니다.",
    introduce1: "INSERT는 2023년 3월에 만들어진 부산 소마고 전공동아리 입니다.",
    introduce2:
      "저희는 학교 플랫폼 개발 동아리로 학교 커뮤니티를 발전시키는 프로젝트를 진행합니다.",
  };

  return (
    <S.HistoryLayout>
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
