import BSM from "assets/BSM.svg";
import bumawiki from "assets/bumawiki.svg";
import BSSMportfolio from "assets/BSSMportfolio.svg";
import ubin from "assets/ubin.svg";
import sewon from "assets/sewon.svg";
import hyunjun from "assets/hyunjun.svg";
import jacobhboy from "assets/jacobhboy.svg";
import hohyun from "assets/hohyun.svg";
import jimin from "assets/jimin.svg";
import * as S from "./style";

function Service() {
  const projects = [
    {
      logo: BSM,
      direction: "left",
      title: "BSM",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [ubin, sewon, hyunjun, jacobhboy, hohyun],
    },
    {
      logo: bumawiki,
      direction: "right",
      title: "부마위키",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [ubin, sewon, jacobhboy, hohyun],
    },
    {
      logo: BSSMportfolio,
      direction: "left",
      title: "포토폴리오 사이트다",
      subtitle: "기술스택 : Next.JS, TypeScript",
      contributor: [jimin],
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
        <>
          <S.ProjectLayout>
            {project.direction === "left" ? (
              <S.ProjectLogo src={project.logo} direction={project.direction} />
            ) : null}
            <S.ProjectContentsLayout>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectSubTitle margin>{project.subtitle}</S.ProjectSubTitle>
              <S.ProjectSubTitle margin={false}>Contributors</S.ProjectSubTitle>
              <S.Contributors>
                {project.contributor.map((contributor) => (
                  <S.Contributor src={contributor} />
                ))}
              </S.Contributors>
            </S.ProjectContentsLayout>
            {project.direction === "right" ? (
              <S.ProjectLogo src={project.logo} direction={project.direction} />
            ) : null}
          </S.ProjectLayout>
          <S.ProjectDivider />
        </>
      ))}
    </S.Container>
  );
}

export default Service;
