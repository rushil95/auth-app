import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Logo as StyledLogo } from "../../styled-components/shared";
import LogoLight from "../../assets/logo-light.svg";
import LogoDark from "../../assets/logo-light.svg";

export default function Logo(props) {
  const theme = useContext(ThemeContext);
  return (
    <StyledLogo
      src={theme.id === "light" ? LogoLight : LogoDark}
      alt="devChallenges Logo"
      {...props}
    />
  );
}
