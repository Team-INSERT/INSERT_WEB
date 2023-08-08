import * as S from "./style";
import Logo from "../../assets/logo.svg";

const navigation = [
  { title: "팀 소개", component: "history" },
  { title: "프로젝트", component: "service" },
  { title: "타임라인", component: "timeline" },
  { title: "멤버", component: "member" },
];

function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderSymbol>
          <S.HeaderLogo src={Logo} />
          <S.HeaderTitle />
        </S.HeaderSymbol>
        <S.HeaderNavigation>
          {navigation.map((page) => (
            <S.HeaderNavigationItem to={page.component} smooth>
              {page.title}
            </S.HeaderNavigationItem>
          ))}
        </S.HeaderNavigation>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}

export default Header;
