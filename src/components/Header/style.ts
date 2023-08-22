import styled from "styled-components";
import { Link } from "react-scroll";
import theme from "theme";
import color from "../../styles/color";
import { font } from "../../styles/font";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 60px;
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
  @media ${theme.device.fold} {
    gap: 7px;
  }
`;

export const HeaderLogo = styled.img`
  width: 33px;
  height: 33px;
  @media ${theme.device.mobile} {
    width: 25px;
    height: 25px;
  }
  @media ${theme.device.fold} {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.h1`
  ${font.H3};

  &:after {
    content: "INSERT";
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 50px;
  margin-left: auto;
  @media ${theme.device.mobile} {
    gap: 20px;
  }
  @media ${theme.device.fold} {
    gap: 10px;
  }
`;

export const HeaderNavigationItem = styled(Link)`
  ${font.p2};
  text-decoration: none;
  color: ${color.black};
  cursor: pointer;
`;
