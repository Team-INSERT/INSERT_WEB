import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 10% 5% 10%;
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
  width: 80%;
  margin-bottom: 1%;
`;

export const ProjectAnchor = styled.div`
  width: 50%;
`;

export const ProjectLogo = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.div`
  ${font.D3}
  margin-bottom: 2.5%;
  color: ${color.black};
`;

export const ProjectSubTitle = styled.div`
  ${font.H5}
  color: ${color.text};
  white-space: pre-wrap;
`;

export const ContributorsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProjectContentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
`;

export const ProjectLayout = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  gap: 0 3%;
  border-bottom: 2px solid ${color.content};
  padding: 4% 0;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const Contributors = styled.div`
  display: flex;
  margin-top: 1.5%;
`;

export const Contributor = styled.img`
  width: 7.5%;
  margin-right: 1.5%;
`;
