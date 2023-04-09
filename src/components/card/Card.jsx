import { TextGray } from "../../App.styled";
import {
  AdCard,
  CardWrapper,
  CardIcon,
  CardHeading,
  CardActionCall,
  CardBottomSegment,
} from "./Card.styled";

export const Card = ({ icon, heading, content, href }) => {
  return (
    <CardWrapper>
      <CardIcon src={icon} alt="card icon" />
      <CardHeading>{heading}</CardHeading>
      <CardBottomSegment>
        <TextGray>{content}</TextGray>
        <CardActionCall hrf={href}>Get Started</CardActionCall>
      </CardBottomSegment>
    </CardWrapper>
  );
};

export const AdvertCard = ({ content }) => {
  return <AdCard>{content}</AdCard>;
};
