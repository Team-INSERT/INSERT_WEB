import styled from "styled-components";
import { font } from "styles/font";
import theme from "theme";
import color from "styles/color";

export const Container = styled.div`
  color: white;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20%;
`;

export const Title = styled.p`
  ${font.D2};
  color: ${color.black};
`;

export const SubTitle = styled.p`
  ${font.H2};
  color: ${color.text};
`;

export const TimeLineBox = styled.div`
  display: flex;
`;

export const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 11% 0 8% 150%;
    border-right: 4px solid black;
  }
`;

export const TimeLineO = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background: black;
  border-radius: 50%;
  margin: 100% 0 0 142%;
  @media ${theme.device.mobile} {
    margin: 90% 0 0 130%;
  }
  @media ${theme.device.tablit} {
    margin: 100% 0 0 138%;
  }
`;

export const TimeLineItem = styled.div`
  display: flex;
`;

export const TimeLineDate = styled.p`
  display: flex;
  flex-direction: column;
  ${font.H1}
  color: ${color.black};
  margin: 80% 0 50% 0;
`;

export const TimeLineText = styled.div`
  display: flex;
  margin: 4% 0 0 10%;
`;

export const TimeLineYear = styled.div`
  margin-top: 8%;
`;

export const TimeLineContentDate = styled.p`
  ${font.H2}
  color: ${color.text};
`;

export const TimeLineContent = styled.p`
  ${font.H3}
  font-weight: 700;
  color: ${color.black};
  margin-top: 5%;
`;
