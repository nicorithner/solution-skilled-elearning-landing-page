import {
  HeroWrapper,
  HeroLeftSegment,
  HeroRightSegment,
  HeroImgDesktop,
  HeroImgTablet,
  HeroImgMobile,
  HeroHeading,
  HeroDescription,
} from "./HeroSection.styled";
import { ButtonGradient1 } from "../button/Button";
import imageHeroDesktop from "../../assets/image-hero-desktop.png";
import imageHeroTablet from "../../assets/image-hero-tablet.png";
import imageHeroMobile from "../../assets/image-hero-mobile.png";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroLeftSegment>
        <HeroHeading>Maximize skill, minimize budget</HeroHeading>
        <HeroDescription>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </HeroDescription>

        <ButtonGradient1>Get Started</ButtonGradient1>
      </HeroLeftSegment>
      <HeroRightSegment>
        <HeroImgDesktop src={imageHeroDesktop} alt="woman drink hot beverage" />
        <HeroImgTablet src={imageHeroTablet} alt="woman drink hot beverage" />
        <HeroImgMobile src={imageHeroMobile} alt="woman drink hot beverage" />
      </HeroRightSegment>
    </HeroWrapper>
  );
};
