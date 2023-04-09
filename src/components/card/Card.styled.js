import styled from "styled-components";
import { GRADIENTS, NEUTRAL } from "../../constants";

export const CardWrapper = styled.div`
  width: 350px;
  height: 322px;
  border-radius: 15px;
  border: 1px solid red;
  background-color: ${NEUTRAL.white};
  box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);
`;
export const AdCard = styled(CardWrapper)`
  background: ${GRADIENTS.tomatoPersianRose};
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  color: ${NEUTRAL.white};
  padding: 0 32px;
  padding-top: 64px;
`;
export const CardIcon = styled.img``;
export const CardHeading = styled.h2``;
export const CardActionCall = styled.a``;
