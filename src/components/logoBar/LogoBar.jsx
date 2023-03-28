import { Button } from "../button/Button";
import { Logo, LogoBarDark, LogoBarLight } from "./LogoBar.styled";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";

export const LogoBar = ({type}) => {
  switch (true) {
    case type === 'dark':
      return (
      <LogoBarDark>
        <Logo src={logoLight} alt="Skilled logo" />
        <Button>Get Started</Button>
      </LogoBarDark>
    )
    default:
      return (
      <LogoBarLight>
        <Logo src={logoDark} alt="Skilled logo" />
        <Button>Get Started</Button>
      </LogoBarLight>
    )
  }
}
