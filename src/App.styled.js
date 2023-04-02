import styled from "styled-components";
import { PRIMARY, NEUTRAL } from "./constants";

export const MainWrapper = styled.main``;

export const Heading = styled.h1`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: ${56 / 16}rem;
  line-height: ${71 / 16}rem;
  color: ${PRIMARY.midnightExpress};
`;

export const TextGray = styled.p`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 500;
  font-size: ${18 / 16}rem;
  line-height: ${28 / 16}rem;
  color: ${NEUTRAL.gray};
`;
