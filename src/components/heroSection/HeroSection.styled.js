import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  min-width: 100%;
`;
export const HeroLeftSegment = styled.div``;
export const Heading = styled.h1``;
export const HeroRightSegment = styled.div``;
export const HeroImgDesktop = styled.img`
  display: block;

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
