import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const MemberLayout = styled.div`
  width: 100%;
  height: 45.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 95%;
`;

export const MemberTitle = styled.div`
  height: 11%;
  ${font.H1};
  color: ${color.black};
`;

export const MemberHr = styled.div`
  border-bottom: 2px solid #d9d9d9;
`;

export const MemberMain = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
`;

export const MemberGrade = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const GradeTitle = styled.div`
  ${font.H4};
  color: ${color.black};
  margin: 30% 0 0 13%;
  width: 20%;
`;

export const GradeButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GradeButton1 = styled.a`
  width: 12%;
  text-align: center;
  ${font.H6}
  color: ${color.gray};
  margin: 11% 0 0 19%;
  &:hover {
    background-color: ${color.on_tertiary};
    width: 12%;
    border-radius: 5px;
  }
`;

export const GradeButton2 = styled.a`
  width: 12%;
  text-align: center;
  ${font.H6};
  color: ${color.gray};
  margin: 8% 0 0 19%;
  &:hover {
    background-color: ${color.on_tertiary};
    width: 12%;
    border-radius: 5px;
  }
`;

export const GradeButton3 = styled.a`
  width: 12%;
  text-align: center;
  ${font.H6};
  color: ${color.gray};
  margin: 8% 0 0 19%;
  &:hover {
    background-color: ${color.on_tertiary};
    width: 12%;
    border-radius: 5px;
  }
`;

export const GradeButton4 = styled.a`
  width: 12%;
  text-align: center;
  ${font.H6};
  color: ${color.gray};
  margin: 8% 0 0 19%;
  &:hover {
    background-color: ${color.on_tertiary};
    width: 12%;
    border-radius: 5px;
  }
`;

export const GradeButton5 = styled.a`
  width: 12%;
  text-align: center;
  ${font.H6};
  color: ${color.gray};
  margin: 8% 0 0 19%;
  &:hover {
    background-color: ${color.on_tertiary};
    width: 12%;
    border-radius: 5px;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

export const MemberMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Profile = styled.div`
  display: flex;
  text-align: center;
`;

export const Information = styled.div`
  display: flex;
  text-align: center;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  ${font.code};
  color: ${color.black};
  margin-bottom: 0.2rem;
`;

export const Role = styled.div`
  display: flex;
  align-items: center;
  ${font.caption};
  color: ${color.gray};
  margin-left: 0.2rem;
`;

export const Profile1 = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile2 = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MemberProfileF = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  height: 90%;
  margin-bottom: 1rem;
`;

export const MemberProfileB = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40%;
  height: 90%;
  margin-bottom: 1rem;
`;
