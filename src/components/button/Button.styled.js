import styled from "styled-components";
import { GRADIENTS, NEUTRAL, PRIMARY } from "../../constants";

const ButtonBase = styled.button`
  background: ${NEUTRAL.gray};
  border-radius: ${28 / 16}rem;
  width: 167px;
  height: 56px;
  border: none;
  padding: 14 32;
  color: ${NEUTRAL.white};
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  line-height: ${28 / 16}rem;
  text-align: center;
  cursor: pointer;
`;
export const ButtonSolid = styled(ButtonBase)`
  background: ${PRIMARY.midnightExpress};
  z-index: 2;

  &:hover {
    background: ${GRADIENTS.whiteTransparency}, ${PRIMARY.chetwodeBlue};
  }
`;
export const ButtonGrad1 = styled(ButtonBase)`
  background: ${GRADIENTS.tomatoPersianRose};

  &:hover {
    background: ${GRADIENTS.whiteTransparency}, ${GRADIENTS.tomatoPersianRose};
  }
`;
export const ButtonGrad2 = styled(ButtonBase)`
  background: ${GRADIENTS.bluePersianRose};

  &:hover {
    background: ${GRADIENTS.whiteTransparency}, ${GRADIENTS.bluePersianRose};
  }
`;
