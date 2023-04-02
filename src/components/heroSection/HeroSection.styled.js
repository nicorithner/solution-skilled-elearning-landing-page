import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";
import { Heading, TextGray } from "../../App.styled";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  min-height: 80vh;
  padding-left: 165px;
  border: solid 2px blue;
`;
export const HeroLeftSegment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 457px;
  height: auto;
`;

export const HeroHeading = styled(Heading)`
  margin-bottom: ${29 / 16}rem;
`;

export const HeroDescription = styled(TextGray)`
  margin-bottom: ${40 / 16}rem;
  margin-right: ${12 / 16}rem;
`;

export const HeroRightSegment = styled.div``;
export const HeroImgDesktop = styled.img`
  display: block;
  position: absolute;
  right: -250px;
  top: -100px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeroImgTablet = styled.img`
  display: none;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    display: block;
  }
`;
export const HeroImgMobile = styled.img`
  display: none;

  @media only screen and (max-width: 400px) {
    display: block;
  }
`;
