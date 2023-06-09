import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";

const LogoBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 165px;

  @media only screen and (max-width: 768px) and (min-width: 400px) {
    padding: 24px 40px;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px;
    max-width: 100%;
  }

`;
export const LogoBarDark = styled(LogoBar)`
  background: ${PRIMARY.midnightExpress};
`;
export const LogoBarLight = styled(LogoBar)`
  background: ${NEUTRAL.white};
`;
export const Logo = styled.img``;
