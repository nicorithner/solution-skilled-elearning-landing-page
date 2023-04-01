import { ButtonSolidDark, ButtonGradient2 } from "../button/Button";
import { Logo, LogoBarDark, LogoBarLight } from "./LogoBar.styled";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";

export const LogoBar = ({type}) => {
  switch (true) {
    case type === 'dark':
      return (
      <LogoBarDark>
        <Logo src={logoLight} alt="Skilled logo" />
        <ButtonSolidDark>Get Started</ButtonSolidDark>
      </LogoBarDark>
    )
    default:
      return (
      <LogoBarLight>
        <Logo src={logoDark} alt="Skilled logo" />
        <ButtonGradient2>Get Started</ButtonGradient2>
      </LogoBarLight>
    )
  }
}
