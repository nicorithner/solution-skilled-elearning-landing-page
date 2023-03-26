import {
  ActionCallButton,
  Card,
  CardActionCall,
  CardHeading,
  CardIcon,
  CardSection,
  FirstCard,
  Footer,
  Header,
  Heading,
  HeroSection,
  MainWrapper,
  Logo,
  HeroLeft,
  HeroRight,
  HeroRightImg,
} from "./App.styled.js";

import logoDark from "./assets/logo-dark.svg";
import logoLight from "./assets/logo-light.svg";
import iconAnimation from "./assets/icon-animation.svg";
import iconDesign from "./assets/icon-design.svg";
import iconPhotography from "./assets/icon-photography.svg";
import iconCrypto from "./assets/icon-crypto.svg";
import iconBusiness from "./assets/icon-business.svg";
import imageHeroDesktop from "./assets/image-hero-desktop.png"; 

function App() {
  return (
    <MainWrapper>
      <Header>
        <Logo src={logoDark} alt="skilled logo" />
        <ActionCallButton>Get Started</ActionCallButton>
      </Header>

      <HeroSection>
        <HeroLeft>
          <Heading>Maximize skill, minimize budget</Heading>

          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>

          <ActionCallButton>Get Started</ActionCallButton>
        </HeroLeft>
        <HeroRight><HeroRightImg src={imageHeroDesktop} alt="woman drink hot beverage"/></HeroRight>
      </HeroSection>
      <CardSection>
        <FirstCard>
          <p>Check out our most popular courses!</p>
        </FirstCard>

        <Card>
          <CardIcon src={iconAnimation} alt="card icon" />
          <CardHeading>Animation</CardHeading>
          <p>
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <CardActionCall>Get Started</CardActionCall>
        </Card>

        <Card>
          <CardIcon src={iconDesign} alt="card icon" />
          <CardHeading>Design</CardHeading>
          <p>
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <CardActionCall>Get Started</CardActionCall>
        </Card>

        <Card>
          <CardIcon src={iconPhotography} alt="card icon" />
          <CardHeading>Photography</CardHeading>
          <p>
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <CardActionCall>Get Started</CardActionCall>
        </Card>

        <Card>
          <CardIcon src={iconCrypto} alt="card icon" />
          <CardHeading>Crypto</CardHeading>
          <p>
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <CardActionCall>Get Started</CardActionCall>
        </Card>

        <Card>
          <CardIcon src={iconBusiness} alt="card icon" />
          <CardHeading>Business</CardHeading>
          <p>
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <CardActionCall>Get Started</CardActionCall>
        </Card>
      </CardSection>

      <Footer>
        <Logo src={logoLight} alt="skilled logo" />
        <ActionCallButton>Get Started</ActionCallButton>
      </Footer>
    </MainWrapper>
  );
}

export default App;
