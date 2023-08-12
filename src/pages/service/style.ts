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
  letter-spacing: -2px;
  color: ${color.black};
  margin-bottom: 3%;
`;

export const SubTitle = styled.div`
  ${font.H4}
  color: ${color.text};
  width: 37%;
  margin-bottom: 1%;
`;

export const ProjectLayout = styled.div`
  display: flex;
  border-bottom: 2px solid #d9d9d9;
  padding: 4% 0;
`;

export const ProjectAnchor = styled.a`
  width: 44.5%;
`;

export const ProjectLogo = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.div`
  ${font.D3}
  margin-bottom: 2.5%;
`;

export const ProjectSubTitle = styled.div`
  ${font.H5}
  color: ${color.text};
  &:nth-child(2) {
    margin-bottom: 47.5%;
  }
`;

export const ProjectContentsLayout = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.direction === "left"
      ? css`
          margin-left: 2.5%;
        `
      : css`
          margin-right: 22.5%;
        `}
`;

export const Contributors = styled.div`
  display: flex;
  margin-top: 2.5%;
`;

export const Contributor = styled.img`
  width: 2.5rem;
  margin-right: 3%;
`;
