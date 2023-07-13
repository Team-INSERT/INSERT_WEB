import styled from "styled-components";
import { font } from "../../../../styles/font";
import color from "../../../../styles/color";

export const HomePageLayOut = styled.div`
  color: ${color.white};
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
`;

export const HomePageLogo = styled.img`
  width: 101.464px;
  height: 94.953px;
  margin: 4% 0 0 80%;
  position: absolute;
`;

export const HomePageHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageTitle = styled.h1`
  color: ${color.black};
  font-size: 72px;
  margin: 3% 0 0 10%;
`;

export const HomePageSubTitle = styled.p`
  display: flex;
  width: 800px;
  color: ${color.black};
  margin: 0 0 0 10%;
  font-weight: 700;
  font-size: 28px;
`;

export const HomePageHr = styled.div`
  display: flex;
  width: 1230px;
  height: 2px;
  background-color: #d9d9d9;
  margin: 1% 0 0 10%;
`;

export const HomePageCodeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 10%;
`;

export const HomePageCodeText = styled.p`
  color: ${color.text};
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

export const HomePageCode = styled.p`
  color: ${color.black};
  font-size: 54px;
  font-weight: 700;
  display: flex;
`;

export const HomePageWatchSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 10%;
`;

export const HomePageWatchText = styled.p`
  color: ${color.text};
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

export const HomePageWatch = styled.p`
  color: ${color.black};
  font-size: 54px;
  font-weight: 700;
  display: flex;
`;

export const HomePageMiddle = styled.div`
  display: flex;
`;

export const HomePageMiddle2 = styled.div`
  display: flex;
`;

export const HomePageCommitSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 0 0 10%;
`;

export const HomePageCommitText = styled.p`
  color: ${color.text};
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

export const HomePageCommit = styled.p`
  color: ${color.black};
  font-size: 54px;
  font-weight: 700;
  display: flex;
`;

export const HomePageTimeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7% 0 0 14%;
`;

export const HomePageTime = styled.p`
  color: ${color.black};
  font-size: 54px;
  font-weight: 700;
  display: flex;
`;

export const HomePageTimeText = styled.p`
  color: ${color.text};
  display: flex;
  font-size: 22px;
  font-weight: 600;
`;

export const HomePageFooter = styled.p`
  color: ${color.text};
  font-size: 15px;
  font-weight: 700px;
  margin: 3% 0 4% 10%;
`;
