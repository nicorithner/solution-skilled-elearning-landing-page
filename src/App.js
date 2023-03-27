import {
  CardSection,
  Footer,
  Header,
  Heading,
  HeroSection,
  MainWrapper,
  HeroLeft,
  HeroRight,
  HeroRightImg,
} from "./App.styled.js";
import { Button } from "./components/button/Button.jsx";
import { AdvertCard, Card } from "./components/card/Card.jsx";
import logoLight from "./assets/logo-light.svg";
import iconAnimation from "./assets/icon-animation.svg";
import iconDesign from "./assets/icon-design.svg";
import iconPhotography from "./assets/icon-photography.svg";
import iconCrypto from "./assets/icon-crypto.svg";
import iconBusiness from "./assets/icon-business.svg";
import imageHeroDesktop from "./assets/image-hero-desktop.png";
import { LogoBar } from "./components/logoBar/LogoBar.jsx";

function App() {
  return (
    <MainWrapper>
      <Header>
        <LogoBar type='dark'/>
      </Header>

      <HeroSection>
        <HeroLeft>
          <Heading>Maximize skill, minimize budget</Heading>

          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>

          <Button>Get Started</Button>
        </HeroLeft>
        <HeroRight>
          <HeroRightImg src={imageHeroDesktop} alt="woman drink hot beverage" />
        </HeroRight>
      </HeroSection>
      <CardSection>
        <AdvertCard content="Check out our most popular courses!" />

        <Card
          icon={iconAnimation}
          heading="Animation"
          content="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          href="#"
        />

        <Card
          icon={iconDesign}
          heading="Design"
          content="Create beautiful, usable interfaces to help shape the future of how the web looks."
          href="#"
        />

        <Card
          icon={iconPhotography}
          heading="Photography"
          content="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
          href="#"
        />

        <Card
          icon={iconCrypto}
          heading="Crypto"
          content="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          href="#"
        />

        <Card
          icon={iconBusiness}
          heading="Business"
          content="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          href="#"
        />
      </CardSection>

      <Footer>
        <LogoBar type='light'/>
      </Footer>
    </MainWrapper>
  );
}

export default App;
