import styled, { css } from "styled-components";
import { font } from "styles/font";
import theme from "theme";
import color from "styles/color";

export const MemberLayout = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10% 0 10%;
`;

export const MemberTitle = styled.div`
  padding: 0 0 1% 0;
  ${font.D3};
  letter-spacing: -2px;
  color: ${color.black};
`;

export const MemberHr = styled.div`
  display: flex;
  border-bottom: 2px solid ${color.content};
`;

export const MemberMain = styled.div`
  display: flex;
  width: 100%;
`;

export const MemberFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15% 0 0;
  background-color: aliceblue;
  @media ${theme.device.mobile} {
    padding: 0 6% 0 0;
  }
  @media ${theme.device.tablit} {
    padding: 0 7% 0 0;
  }
`;

export const FilterTitle = styled.div`
  ${font.H2};
  color: ${color.black};
  margin-top: 30%;
`;

export const FilterButton = styled.div<{ isActive: boolean }>`
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  padding: 3px 6px;
  ${font.H4};
  margin-top: 25%;
  color: #ced4da;
  &:first-child {
    margin-top: 50%;
  }
  ${(props) =>
    props.isActive
      ? css`
          color: ${color.black};
        `
      : css`
          &:hover {
            background-color: #f1f3f5;
          }
        `}
`;

export const Member = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3% 0 10% 3%;
`;

export const MemberMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MemberProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 60px 20px;
  & > a {
    text-decoration: none;
  }
`;

export const Profile = styled.img`
  display: flex;
  text-align: center;
  width: 16vw;
  height: 18vw;
`;

export const Birthday = styled.img`
  position: absolute;
  width: 16vw;
  height: 18vw;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Name = styled.div`
  display: flex;
  ${font.H5};
  color: ${color.black};
  margin-top: 3%;
  @media ${theme.device.mobile} {
  }
`;

export const Role = styled.div`
  display: flex;
  ${font.btn3};
  color: ${color.gray};
  margin-top: 3%;
  margin-left: 0.4rem;
`;
