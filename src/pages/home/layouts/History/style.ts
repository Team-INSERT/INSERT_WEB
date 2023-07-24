import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const HistoryLayout = styled.div`
  width: 100%;
  height: 45.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HistoryContainer = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  text-align: center;
`;

export const HistoryText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;

export const HistoryTitle = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  ${font.H1}
  color: ${color.black};
`;

export const HistoryIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: 1.5%;
  ${font.H5};
  color: ${color.text};
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
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5%;
`;
