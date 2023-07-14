import styled from "styled-components";
import { font } from "../../../../styles/font";
import color from "../../../../styles/color";

export const HomePageLayOut = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

export const HomePageLogo = styled.img`
  width: 101.464px;
  height: 94.953px;
  margin: 4% 0 0 10%;
`;

export const HomePageHeader = styled.div`
  display: flex;
`;

export const HomePageTitle = styled.h1`
  color: ${color.black};
  ${font.D1};
  margin: 3% 0 0 10%;
`;

export const HomePageSubTitle = styled.p`
  display: flex;
  width: 800px;
  color: ${color.black};
  margin: 0 0 0 1%;
  ${font.H2};
`;

export const HomePageHr = styled.div`
  display: flex;
  border-bottom: 2px solid #d9d9d9;
  margin: 1% 0 0 10%;
`;
export const HomePageMiddle = styled.div`
  display: flex;
  margin-top: 3%;
`;

export const HomePageMiddle1 = styled.div`
  display: flex;
  color: ${color.black};
  margin: 2% 0 0 10%;
`;

export const Title = styled.p`
  display: flex;
  ${font.H2};
  color: ${color.text};
  margin: 3% 0% 0 0;
`;

export const Value = styled.p`
  display: flex;
  ${font.D2};
  margin: 0 0 5% 0;
`;

export const HomePageMiddle2 = styled.div`
  display: flex;
  color: ${color.black};
  margin: 2% 0 0 10%;
`;

export const Title2 = styled.p`
  display: flex;
  ${font.H2};
  color: ${color.text};
  margin: 3% 0 0 10%;
`;

export const Value2 = styled.p`
  display: flex;
  ${font.D2};
  margin: 0 0 5% 10%;
`;
export const HomePageFooter = styled.p`
  color: ${color.text};
  ${font.p2};
  margin: 3% 0 4% 10%;
`;
