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

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
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

  @media only screen and (max-width: 400px) {
    width: 100%;
    margin-top: 38px;
    margin-bottom: 26px;
  }
`;

export const HeroHeading = styled(Heading)`
  margin-bottom: 29px;
`;

export const HeroDescription = styled(TextGray)`
  margin-bottom: 40px;
  margin-right: 12px;
  @media only screen and (max-width: 400px) {
    margin-right: 0;
  }
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

  @media only screen and (max-width: 400px) {
    width: 100%;
    height: fit-content;
    margin: 0 16px;
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
