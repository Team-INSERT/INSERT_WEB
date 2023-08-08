import * as I from "assets";
import * as S from "./style";

function Service() {
  const projects = [
    {
      logo: I.BSM,
      url: "https://bssm.kro.kr/",
      direction: "left",
      title: "BSM",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.hyunjun, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.bumawiki,
      url: "https://buma.wiki/",
      direction: "right",
      title: "부마위키",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.BSSMportfolio,
      url: "https://portfolio.bssm.io/",
      direction: "left",
      title: "포토폴리오 사이트다",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.jimin],
    },
  ];

  return (
    <S.Container id="service">
      <S.Title>사용할 수 있는 서비스를 제공합니다</S.Title>
      <S.SubTitle>
        INSERT는 부산 소프트웨어 마이스터고 학생들에게 필요한 서비스를
        제공합니다.
      </S.SubTitle>
      {projects.map((project) => (
        <S.ProjectLayout>
          {project.direction === "left" && (
            <a href={project.url}>
              <S.ProjectLogo src={project.logo} direction={project.direction} />
            </a>
          )}
          <S.ProjectContentsLayout>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectSubTitle>{project.subtitle}</S.ProjectSubTitle>
            <S.Contributors>Contributors</S.Contributors>
            <S.ContributorBox>
              {project.contributor.map((contributor) => (
                <S.Contributor src={contributor} />
              ))}
            </S.ContributorBox>
          </S.ProjectContentsLayout>
          {project.direction === "right" && (
            <a href={project.url}>
              <S.ProjectLogo src={project.logo} direction={project.direction} />
            </a>
          )}
        </S.ProjectLayout>
      ))}
    </S.Container>
  );
}

export default Service;
