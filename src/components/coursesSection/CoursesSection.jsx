import { CardSection } from "./CoursesSection.styled";
import { AdvertCard, Card } from "../card/Card";
import iconAnimation from "../../assets/icon-animation.svg";
import iconDesign from "../../assets/icon-design.svg";
import iconPhotography from "../../assets/icon-photography.svg";
import iconCrypto from "../../assets/icon-crypto.svg";
import iconBusiness from "../../assets/icon-business.svg";

export const CoursesSection = () => {
  return (
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
  );
};
