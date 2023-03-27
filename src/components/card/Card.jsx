import {
  AdCard,
  CardWrapper,
  CardIcon,
  CardHeading,
  CardActionCall,
} from "./Card.styled";

export const Card = ({ icon, heading, content, href }) => {
  return (
    <CardWrapper>
      <CardIcon src={icon} alt="card icon" />
      <CardHeading>{heading}</CardHeading>
      <p>{content}</p>
      <CardActionCall hrf={href}>Get Started</CardActionCall>
    </CardWrapper>
  );
};

export const AdvertCard = ({ content }) => {
  return <AdCard>{content}</AdCard>;
};
