import Logo from "assets/logo.svg";
import * as S from "./style";

function HomePage() {
  const middle = [
    { id: 1, title: "작성한 코드 라인", value: "168,257+" },
    { id: 2, title: "웹 페이지 조회수", value: "560,257+" },
    { id: 3, title: "총 커밋 횟수", value: "2,358+" },
    { id: 4, title: "함께한 시간", value: "2,650+" },
  ];

  return (
    <S.HomePageLayOut>
      <S.HomePageHeader>
        <S.HomePageTitle>
          Team. INSERT{" "}
          <S.HomePageSubTitle>
            부산소프트웨어마이스터고 플랫폼 개발 동아리 INSERT 입니다.
          </S.HomePageSubTitle>
        </S.HomePageTitle>
        <S.HomePageLogo src={Logo} />
      </S.HomePageHeader>
      <S.HomePageMiddle>
        <S.HomePageMiddle1>
          <div>
            {middle.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div>
                    <S.Title>{item.title}</S.Title>
                    <S.Value>{item.value}</S.Value>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </S.HomePageMiddle1>
        <S.HomePageMiddle2>
          <div>
            {middle.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <div>
                    <S.Title2>{item.title}</S.Title2>
                    <S.Value2>{item.value}</S.Value2>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </S.HomePageMiddle2>
      </S.HomePageMiddle>
      <S.HomePageFooter>2023년 6월 기준</S.HomePageFooter>
    </S.HomePageLayOut>
  );
}

export default HomePage;
