import { ButtonSolid, ButtonGrad1, ButtonGrad2 } from "./Button.styled";

export const ButtonSolidDark = ({children}) => {
  return <ButtonSolid>{children}</ButtonSolid>;
};

export const ButtonGradient1 = ({children}) => {
  return <ButtonGrad1>{children}</ButtonGrad1>;
};

export const ButtonGradient2 = ({children}) => {
  return <ButtonGrad2>{children}</ButtonGrad2>;
};
