import styled, { css } from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 7.5% 5% 10%;
  flex-direction: column;
`;

export const Title = styled.div`
  ${font.D3}
  letter-spacing: -0.5%;
  color: ${color.black};
  margin-bottom: 1%;
`;

export const SubTitle = styled.div`
  ${font.H4}
  color: ${color.text};
  width: 60%;
  margin-bottom: 1.5%;
`;

export const ProjectLayout = styled.div`
  display: flex;
  border-bottom: 2px solid #d9d9d9;
  padding: 3% 0;
`;

export const ProjectLogo = styled.img<{ direction: string }>`
  width: 80%;
  ${(props) =>
    props.direction === "left"
      ? css`
          margin-right: 0;
        `
      : css`
          margin-left: 55%;
        `}
`;

export const ProjectTitle = styled.div`
  ${font.D3}
  margin-bottom: 1%;
`;

export const ProjectSubTitle = styled.div`
  ${font.H5}
  color: ${color.text};
  margin-bottom: 5rem;
`;

export const ProjectContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contributors = styled.div`
  ${font.H5}
  color: ${color.text};
`;

export const ContributorBox = styled.div`
  display: flex;
  margin-top: 1%;
`;

export const Contributor = styled.img`
  width: 2.5rem;
  margin-right: 0.5rem;
`;
