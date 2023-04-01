import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";

const LogoBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 24px;
`;
export const LogoBarDark = styled(LogoBar)`
  background: ${PRIMARY.midnightExpress};
`;
export const LogoBarLight = styled(LogoBar)`
  background: ${NEUTRAL.white};
`;
export const Logo = styled.img``;
