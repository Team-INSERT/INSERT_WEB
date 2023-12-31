import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";
import theme from "theme";

export const HomePageLayOut = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

export const HomePageLogo = styled.img`
  width: 8.5%;
  margin: 4% 0 0 25%;
  @media ${theme.device.mobile} {
    width: 15%;
  }
  @media ${theme.device.fold} {
    width: 20%;
  }
`;

export const HomePageHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  border-bottom: 2px solid ${color.content};
  margin: 2% 10% 0 10%;
`;

export const HomePageTitle = styled.h1`
  color: ${color.black};
  ${font.D1};
  margin: 3% 0 2% 0;
`;

export const HomePageSubTitle = styled.p`
  display: flex;
  color: ${color.black};
  margin: 2% 0 0 1%;
  width: 100%;
  ${font.H2};
`;
export const HomePageMiddle = styled.div`
  display: flex;
  margin-top: 3%;
`;

export const HomePageMiddle1 = styled.div`
  display: flex;
  flex-shrink: 0;
  color: ${color.black};
  margin: 2% 0 0 10%;
`;

export const ValueBox = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.p`
  display: flex;
  flex-shrink: 0;
  ${font.H2};
  color: ${color.text};
  margin: 3% 0% 0 0;
`;

export const Value = styled.p`
  flex-shrink: 0;
  ${font.D2};
  margin: 0 0 5% 0;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  width: 100px;
`;

export const HomePageMiddle2 = styled.div`
  display: flex;
  flex-shrink: 0;
  color: ${color.black};
  margin: 2% 0 0 10%;
`;
export const HomePageFooter = styled.p`
  color: ${color.text};
  ${font.p2};
  margin: 3% 0 4% 10%;
`;
