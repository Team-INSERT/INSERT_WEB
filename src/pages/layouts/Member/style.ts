import styled, { css } from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";
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
  padding: 0 8% 0 0;
  @media ${theme.device.tablit} {
    padding: 0 6% 0 0;
  }
  @media ${theme.device.mobile} {
    padding: 0 4% 0 0;
  }
  @media ${theme.device.fold} {
    padding: 0 2% 0 0;
  }
`;

export const FilterTitle = styled.div`
  ${font.H4};
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
  margin-right: auto;
  margin-left: 8%;
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
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Member = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3% 0 10% 0;
  width: 100%;
  @media ${theme.device.fold} {
    padding: 3% 0 10% 0;
  }
  @media ${theme.device.mobile} {
    padding: 3% 0 10% 3%;
  }
  @media ${theme.device.tablit} {
    padding: 3% 0 10% 2%;
  }

  ${Pagination} {
    margin: 0 auto;
  }
`;

export const MemberMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 0 0 2%;
`;

export const MemberProfile = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 60px 40px;
  & > a {
    text-decoration: none;
  }
  @media ${theme.device.fold} {
    margin: 0 0 30px 9px;
  }
  @media ${theme.device.mobile} {
    margin: 0 0 28px 10px;
  }
`;

export const Profile = styled.img`
  display: flex;
  text-align: center;
  width: 16vw;
  height: 18vw;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  ${font.H5};
  color: ${color.black};
  margin-top: 3%;
`;

export const Role = styled.div`
  display: flex;
  ${font.btn3};
  color: ${color.gray};
  margin-top: 3%;
  margin-left: 0.4rem;
  &::after {
    content: "-Developer";
  }
  @media ${theme.device.fold} {
    display: none;
  }
  @media ${theme.device.mobile} {
    display: none;
  }
`;

export const Loading = styled(BeatLoader)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20rem;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.H1};
`;

export const PaginationButtonLeft = styled.button`
  position: absolute;
  border: none;
  margin: 50% 5% 0 0;
  cursor: pointer;
  font-size: 1rem;
  color: ${color.gray};
  outline: none;
  background: none;
  font-weight: 800;
  font-size: 30px;
  flex-shrink: 0;
  width: 4%;
  height: 5%;
  &:hover {
    background-color: #dedede;
  }
`;

export const PaginationButtonRight = styled.button`
  position: absolute;
  border: none;
  margin: 50% 0 0 60%;
  cursor: pointer;
  font-size: 1rem;
  color: ${color.gray};
  outline: none;
  background: none;
  font-weight: 800;
  width: 4%;
  height: 5%;
  font-size: 30px;
  flex-shrink: 0;
  &:hover {
    background-color: #dedede;
  }
`;

export const ButtonImg = styled.img`
  width: 50%;
`;
