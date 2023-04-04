import styled from "styled-components";
import { Heading, TextGray } from "../../App.styled";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  padding-left: 165px;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    padding-left: 40px;
  }
`;

export const HeroLeftSegment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 457px;
  height: auto;
  margin-top: 162px;
  margin-bottom: 225px;
  overflow: visible;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    margin-top: 100px;
    width: 425px;
  }
`;

export const HeroHeading = styled(Heading)`
  margin-bottom: ${29 / 16}rem;
`;

export const HeroDescription = styled(TextGray)`
  margin-bottom: ${40 / 16}rem;
  margin-right: ${12 / 16}rem;
`;

export const HeroRightSegment = styled.div`
  width: 715px;
  height: 804px;
  margin-top: -145px;
  overflow: hidden;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    max-width: 400px;
    overflow: hidden;
    margin-left: -100px;
  }
`;

export const HeroImgDesktop = styled.img`
  display: block;
  margin-top: -132px;
  margin-right: -130px;
  min-width: 1040px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroImgTablet = styled.img`
  display: none;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    display: block;
    min-width: min-content;
  }
`;

export const HeroImgMobile = styled.img`
  display: none;

  @media only screen and (max-width: 400px) {
    display: block;
  }
`;
