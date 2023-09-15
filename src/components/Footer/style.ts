import styled from "styled-components";
import { font } from "../../styles/font";
import color from "../../styles/color";

export const FooterLayout = styled.div`
  width: 100%;
  color: ${color.content};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.tertiary};
`;

export const FooterContainer = styled.div`
  width: 76%;
  height: 60%;
`;

export const FooterInfoBox = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.span`
  ${font.H2};
`;

export const FooterHGroup = styled.hgroup`
  border-bottom: 1px solid ${color.content};
  padding-bottom: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const FooterSubTitle = styled.span`
  ${font.H5};
  margin-bottom: 3%;
`;

export const FooterPolicyText = styled.span`
  ${font.p4};
  color: ${color.content};
`;

export const FooterCopyright = styled.span`
  margin-top: 4%;
  ${font.p4};
  color: ${color.content};
`;

export const QRCode = styled.img`
  margin-left: auto;
`;
