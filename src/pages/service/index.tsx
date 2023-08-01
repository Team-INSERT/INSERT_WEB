import * as I from "assets";
import * as S from "./style";

function Service() {
  const projects = [
    {
      logo: I.BSM,
      direction: "left",
      title: "BSM",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.hyunjun, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.bumawiki,
      direction: "right",
      title: "부마위키",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.ubin, I.sewon, I.jacobhboy, I.hohyun],
    },
    {
      logo: I.BSSMportfolio,
      direction: "left",
      title: "포토폴리오 사이트다",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [I.jimin],
    },
  ];

  return (
    <S.Container>
      <S.Title>사용할 수 있는 서비스를 제공합니다</S.Title>
      <S.SubTitle>
        대추우랒두ㅏ허ㅜㅏ후ㅏㅣㅁ뤼ㅏ무나ㅣ뮈ㅜㅏㅣ뮈ㅏ
        대추우랒두ㅏ허ㅜㅏ후ㅏㅣㅁ뤼ㅏ무나ㅣ뮈ㅜㅏㅣ뮈ㅏ
      </S.SubTitle>
      {projects.map((project) => (
        <S.ProjectLayout>
          {project.direction === "left" && (
            <S.ProjectLogo src={project.logo} direction={project.direction} />
          )}
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
          {project.direction === "right" && (
            <S.ProjectLogo src={project.logo} direction={project.direction} />
          )}
        </S.ProjectLayout>
      ))}
    </S.Container>
  );
}

export default Service;
