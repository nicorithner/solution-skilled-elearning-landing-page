import styled from "styled-components";
import { PRIMARY, NEUTRAL } from "./constants";

export const MainWrapper = styled.main`
  max-width: 1440px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  background-color: ${NEUTRAL.white};
  /*temp border*/
  border: 1px solid gray;
`;

export const Heading = styled.h1`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: ${56 / 16}rem;
  line-height: ${71 / 16}rem;
  color: ${PRIMARY.midnightExpress};

  @media only screen and (max-width: 768px) {
    font-size: ${40 / 16}rem;
    line-height: ${50 / 16}rem;
  }
`;

export const TextGray = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 500;
  font-size: ${18 / 16}rem;
  line-height: ${28 / 16}rem;
  color: ${NEUTRAL.gray};

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }                                                                   }
`;
