import styled from "styled-components";
import { font } from "styles/font";
import theme from "theme";
import color from "styles/color";

export const HistoryLayout = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoryContainer = styled.div`
  width: 80%;
  display: flex;
  text-align: center;
`;

export const HistoryText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

export const HistoryTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  ${font.D3}
  color: ${color.black};
  letter-spacing: -2px;
`;

export const HistoryIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: 1.5%;
  ${font.H4};
  color: ${color.text};
  @media screen and (max-width: 768px) {
    ${font.ss};
  }
`;

export const HistoryIntroduce1 = styled.div`
  margin-left: auto;
`;

export const HistoryIntroduce2 = styled.div`
  margin-left: auto;
  margin-top: 0.5%;
`;

export const HistoryImg = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 4%;
`;
