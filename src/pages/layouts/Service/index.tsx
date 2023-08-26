import * as I from "assets";
import * as S from "./style";

function Service() {
  const projects = [
    {
      logo: I.BSM,
      url: "https://bssm.kro.kr/",
      title: "BSM",
      contributor: [I.ubin, I.sewon, I.hyunjun, I.jacobhboy, I.hohyun],
      description:
        "BSM은 교내 학생 정보 관리 서비스입니다.\n\n동아리실 예약이나 기숙사 입사 체크, 커뮤니티, 대나무숲, 급식,\n일정표, 시간표 등 그 외에도 여러가지의 서비스를 제공합니다.\n현재 전교생 중 96% 이상의 재학생들이 해당 서비스를 사용하고 있습니다.",
    },
    {
      logo: I.bumawiki,
      url: "https://buma.wiki/",
      title: "BUMAWIKI",
      contributor: [I.ubin, I.sewon, I.jacobhboy, I.hohyun],
      description:
        "부마위키는 교내 학생들만이 사용할 수 있는 우리 학교만의 위키입니다. 여러가지 사건사고나 인물을 다루는 문서들을 편집, 생성할 수 있습니다.\n\n부마위키는 출시 후 2개월도 안 되어 \n구글 애널리틱스 분석 기준 웹 사이트 조회수 30만회를 기록했습니다.",
    },
    {
      logo: I.BSSMportfolio,
      url: "https://portfolio.bssm.io/",
      title: "BSSM Portfolio",
      contributor: [I.jimin],
      description:
        "학생들이 본인들이 만든 포트폴리오 웹사이트를 업로드하고 \n이를 서로 공유할 수 있는 교내 플랫폼입니다.\n\n실제로 취업과 관련된 산학 선생님들께서 회사와 협약을 맺을 때\n이 사이트를 사용하여 학생들의 포트폴리오를 보여주십니다.",
    },
  ];

  return (
    <S.Container id="service">
      <S.Title>학생들을 위한 서비스를 제공합니다</S.Title>
      <S.SubTitle>교내 학생들에게 꼭 필요한 서비스들을 제공합니다.</S.SubTitle>
      {projects.map((project) => (
        <S.ProjectLayout href={project.url}>
          <S.ProjectAnchor>
            <S.ProjectLogo src={project.logo} />
          </S.ProjectAnchor>
          <S.ProjectContentsLayout>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectSubTitle>{project.description}</S.ProjectSubTitle>
            <S.ContributorsLayout>
              <S.ProjectSubTitle>Contributors</S.ProjectSubTitle>
              <S.Contributors>
                {project.contributor.map((contributor) => (
                  <S.Contributor src={contributor} />
                ))}
              </S.Contributors>
            </S.ContributorsLayout>
          </S.ProjectContentsLayout>
        </S.ProjectLayout>
      ))}
    </S.Container>
  );
}

export default Service;
