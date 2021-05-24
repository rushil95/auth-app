import React, { useContext } from "react";
import { ThemeContext } from "styled-components/macro";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import Input from "../components/shared/Input";
import LoginIcon from "../components/shared/LoginIcon";
import { FaGoogle } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Card,
  Footer,
  Heading,
  TextOne,
  Form,
  AccentButton,
  TextOtherLogin,
  OtherLoginContainer,
  Logo,
} from "../styled-components/signup";

export default function Login() {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      <Card>
        <Logo src={theme.id === "light" ? LogoLight : LogoDark} />
        <Heading>Login</Heading>

        <Form mt={34}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <AccentButton
            mt={22}
            width="100%"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Start coding now
          </AccentButton>
        </Form>
        <TextOtherLogin mt={32}>
          or continue with these social profile
        </TextOtherLogin>
        <OtherLoginContainer mt={22}>
          <LoginIcon icon={FaGoogle} />
          <LoginIcon icon={ImGithub} />
        </OtherLoginContainer>
        <TextOtherLogin mt={27}>
          Don’t have an account yet? <Link to="/signup"> Register</Link>
        </TextOtherLogin>
      </Card>
      <Footer>
        <span>created by Rushil</span> <span>devchallenges.io</span>
      </Footer>
    </Wrapper>
  );
}
