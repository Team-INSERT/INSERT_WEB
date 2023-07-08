import React from "react";
import * as S from "./style";
import Logo from "../../assets/logo.svg";

const navigation = ["프로젝트", "역사 소개", "멤버 소개", "블로그"];

function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.HeaderSymbol>
          <S.HeaderLogo src={Logo} />
          <S.HeaderTitle />
        </S.HeaderSymbol>
        <S.HeaderNavigation>
          {navigation.map((title) => (
            <S.HeaderNavigationItem to="/">{title}</S.HeaderNavigationItem>
          ))}
        </S.HeaderNavigation>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
}

export default Header;
