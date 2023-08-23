import { useEffect, useState } from "react";
import { requestMember } from "apis/getGithubMember";
import MemberType from "types/MemberType";
import * as S from "./style";

function Member() {
  type Tech = string[];
  type Gen = string[];

  const techs = ["Frontend Developer", "Backend Developer", "Designer"];
  const gens = ["1st", "2nd", "3rd", "4th", "5th"];

  const [tech, setTech] = useState<Tech>([]);
  const [gen, setGen] = useState<Gen>([]);

  const [introMember, setIntroMember] = useState<MemberType[] | null>([]);

  useEffect(() => {
    requestMember()
      .then((data) => setIntroMember(data))
      .catch(() => setIntroMember(null));
  });

  const clearFilter = () => {
    setTech([]);
    setGen([]);
  };

  const active = (filter: Tech | Gen, item: string) => {
    if (filter.includes(item)) {
      const notActive = filter.filter((activeItem) => activeItem !== item);
      return filter === tech ? setTech(notActive) : setGen(notActive);
    }
    return filter === tech
      ? setTech([...filter, item])
      : setGen([...filter, item]);
  };

  return (
    <S.MemberLayout id="member">
      <S.MemberContainer>
        <S.MemberTitle>멤버</S.MemberTitle>
        <S.MemberHr />
        <S.MemberMain>
          <S.MemberFilter>
            <S.FilterButton
              isActive={!tech.length && !gen.length}
              onClick={() => clearFilter()}
            >
              All
            </S.FilterButton>
            <S.FilterTitle>Tech</S.FilterTitle>
            {techs.map((techItem) => (
              <S.FilterButton
                isActive={tech.includes(techItem)}
                onClick={() => active(tech, techItem)}
              >
                {techItem.replace("Developer", "")}
              </S.FilterButton>
            ))}
            <S.FilterTitle>Gen</S.FilterTitle>
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
            {introMember !== null ? (
              introMember.map((member, memberId) => (
                <S.MemberMiddle key={memberId}>
                  {(gen.includes(member.generation) || !gen.length) &&
                    (tech.includes(member.tech) || !tech.length) && (
                      <S.MemberProfile>
                        <a
                          href={member.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <S.Profile src={member.github_img_url} />
                        </a>
                        <S.Information>
                          <S.Name>{member.name}</S.Name>
                          <S.Role>
                            {member.generation} | {member.tech}
                          </S.Role>
                        </S.Information>
                      </S.MemberProfile>
                    )}
                </S.MemberMiddle>
              ))
            ) : (
              <S.Error>멤버 정보를 받아올 수 없습니다!</S.Error>
            )}
          </S.Member>
        </S.MemberMain>
      </S.MemberContainer>
    </S.MemberLayout>
  );
}

export default Member;
