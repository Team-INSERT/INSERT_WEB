import { useEffect, useState } from "react";
import { requestMember } from "apis/getGithubMember";
import MemberType from "types/MemberType";
import { changeGenString } from "utils/changeGenString";
import * as S from "./style";

function Member() {
  type Tech = string[];
  type Gen = string[];

  const techs = ["Frontend", "Backend"];
  const gens = Array.from({ length: new Date().getFullYear() - 2020 }).map(
    (_, i) => changeGenString(i + 1),
  );

  const [tech, setTech] = useState<Tech>([]);
  const [gen, setGen] = useState<Gen>([]);

  const [introMember, setIntroMember] = useState<MemberType[] | null>([]);
  const [isLoading, setIsloading] = useState(true);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const getMember = async () => {
      try {
        const res = await requestMember();
        setIntroMember(res);
      } catch (error) {
        setLoadingError("멤버 정보를 받아올 수 없습니다!");
        setIntroMember(null);
      } finally {
        setIsloading(false);
      }
    };

    getMember();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const active = (filter: Tech | Gen, item: string) => {
    if (filter.includes(item)) {
      const notActive = filter.filter((activeItem) => activeItem !== item);
      if (filter === tech) {
        setTech(notActive);
      } else {
        setGen(notActive);
      }
    } else if (filter === tech) {
      setTech([...filter, item]);
    } else {
      setGen([...filter, item]);
    }

    setCurrentPage(1);
  };

  const profilesPage = 6;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredMembers = introMember
    ? introMember.filter(
        (member) =>
          (gen.includes(member.generation) || !gen.length) &&
          (tech.includes(member.tech) || !tech.length),
      )
    : [];

  const totalPages = Math.ceil(filteredMembers.length / profilesPage);

  const startIndex = (currentPage - 1) * profilesPage;
  const endIndex = startIndex + profilesPage;

  return (
    <S.MemberLayout id="member">
      <S.MemberContainer>
        <S.MemberTitle>인서트의 멤버들을 소개합니다</S.MemberTitle>
        <S.MemberHr />
        <S.MemberMain>
          <S.MemberFilter>
            <S.FilterTitle>Tech</S.FilterTitle>
            {techs.map((techItem) => (
              <S.FilterButton
                isActive={tech.includes(techItem)}
                onClick={() => active(tech, techItem)}
              >
                {techItem.replace("Developer", "")}
              </S.FilterButton>
            ))}
            <S.FilterTitle>Generation</S.FilterTitle>
            {gens.map((genItem) => (
              <S.FilterButton
                isActive={gen.includes(genItem)}
                onClick={() => active(gen, genItem)}
              >
                {genItem}
              </S.FilterButton>
            ))}
          </S.MemberFilter>
          <S.Member>
            <S.Pagination>
              <S.PaginationButtonLeft
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<"}
              </S.PaginationButtonLeft>
              <S.PaginationButtonRight
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {" >"}
              </S.PaginationButtonRight>
            </S.Pagination>

            <S.Loading loading={isLoading} size="2.5rem" />
            {filteredMembers
              .slice(startIndex, endIndex)
              .map((member, memberId) => (
                <S.MemberMiddle key={memberId}>
                  <S.MemberProfile
                    href={member.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.Profile src={member.github_img_url} />
                    <S.Information>
                      <S.Name>{member.name}</S.Name>
                      <S.Role>
                        {member.generation} | {member.tech}
                      </S.Role>
                    </S.Information>
                  </S.MemberProfile>
                </S.MemberMiddle>
              ))}
          </S.Member>
        </S.MemberMain>
      </S.MemberContainer>
    </S.MemberLayout>
  );
}

export default Member;
