import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../styles/color";
import { font } from "../../styles/font";

export const HeaderLayout = styled.header`
  width: 100vw;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${color.on_tertiary};
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderSymbol = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 26px;
  height: 26px;
`;

export const HeaderTitle = styled.h1`
  ${font.H5};

  &:after {
    content: "INSERT";
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;

export const HeaderNavigationItem = styled(Link)`
  ${font.p3};
  text-decoration: none;
  color: ${color.black};
`;
