import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 7.5% 0 10%;
  flex-direction: column;
`;

export const Title = styled.div`
  ${font.D3}
  letter-spacing: -2px;
  color: ${color.black};
  margin-bottom: 2.5rem;
`;

export const SubTitle = styled.div`
  ${font.H4}
  color: ${color.text};
  width: 30.25rem;
  margin-bottom: 3rem;
`;

export const ProjectLayout = styled.div`
  display: flex;
`;

export const ProjectLogo = styled.img<{ direction: string }>`
  width: 35rem;
  ${(props) =>
    props.direction === "left" ? "margin-right: 2rem" : "margin-left: 17.5rem"}
`;

export const ProjectTitle = styled.div`
  ${font.D3}
  margin-bottom: 0.5rem;
`;

export const ProjectSubTitle = styled.div<{ margin: boolean }>`
  ${font.H5}
  color: ${color.text};
  ${(props) => props.margin && "margin-bottom: 7.5rem"}
`;

export const ProjectContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contributors = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const Contributor = styled.img`
  width: 2.5rem;
  margin-right: 0.5rem;
`;

export const ProjectDivider = styled.div`
  width: 100%;
  border-bottom: 2px solid #d9d9d9;
  margin: 2.5rem 0;
`;
