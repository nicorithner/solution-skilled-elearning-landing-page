import { Button } from "../button/Button";
import {
  Heading,
  HeroWrapper,
  HeroLeftSegment,
  HeroRightSegment,
  HeroImgDesktop,
  HeroImgTablet,
  HeroImgMobile,
} from "./HeroSection.styled";
import imageHeroDesktop from "../../assets/image-hero-desktop.png";
import imageHeroTablet from "../../assets/image-hero-tablet.png";
import imageHeroMobile from "../../assets/image-hero-mobile.png";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroLeftSegment>
        <Heading>Maximize skill, minimize budget</Heading>

        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <Button>Get Started</Button>
      </HeroLeftSegment>
      <HeroRightSegment>
        <HeroImgDesktop src={imageHeroDesktop} alt="woman drink hot beverage" />
        <HeroImgTablet src={imageHeroTablet} alt="woman drink hot beverage" />
        <HeroImgMobile src={imageHeroMobile} alt="woman drink hot beverage" />
      </HeroRightSegment>
    </HeroWrapper>
  );
};
