import styled from "styled-components";
import { GRADIENTS, NEUTRAL, PRIMARY } from "../../constants";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 350px;
  height: 322px;
  border-radius: 15px;
  padding: 64px 32px 40px 32px;
  margin-bottom: 80px;
  background-color: ${NEUTRAL.white};
  box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
`;

export const AdCard = styled(CardWrapper)`
  background: ${GRADIENTS.tomatoPersianRose};
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: ${32 / 16}rem;
  line-height: ${40 / 16}rem;
  color: ${NEUTRAL.white};

  @media only screen and (max-width: 400px) {
    padding: 24px 28px 32px 28px;
    height: 120px;
    font-size: ${24 / 16}rem;
    line-height: ${32 / 16}rem;
  }
`;

export const CardIcon = styled.img`
  position: absolute;
  top: -26px;
  left: 32px;
`;

export const CardHeading = styled.h2`
  margin-bottom: 24px;
`;

export const CardBottomSegment = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardActionCall = styled.a`
  color: ${PRIMARY.frenchRose};
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${18 / 16}rem;
  line-height: ${28 / 16}rem;
`;
