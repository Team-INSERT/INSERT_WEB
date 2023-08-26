import * as I from "assets";
import * as S from "./style";

function Service() {
  const projects = [
    {
      logo: I.BSM,
      url: "https://bssm.kro.kr/",
      title: "BSM",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.hyunjun, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.bumawiki,
      url: "https://buma.wiki/",
      title: "부마위키",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.BSSMportfolio,
      url: "https://portfolio.bssm.io/",
      title: "포토폴리오",
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
        <S.ProjectLayout href={project.url}>
          <S.ProjectAnchor>
            <S.ProjectLogo src={project.logo} />
          </S.ProjectAnchor>
          <S.ProjectContentsLayout>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectSubTitle>{project.subtitle}</S.ProjectSubTitle>
            <S.ProjectSubTitle>Contributors</S.ProjectSubTitle>
            <S.Contributors>
              {project.contributor.map((contributor) => (
                <S.Contributor src={contributor} />
              ))}
            </S.Contributors>
          </S.ProjectContentsLayout>
        </S.ProjectLayout>
      ))}
    </S.Container>
  );
}

export default Service;
