import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components/macro";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import Input from "../components/shared/Input";
import LoginIcon from "../components/shared/LoginIcon";
import { FaGoogle } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/helpers";
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
  ErrorMsg,
} from "../styled-components/signup";

export default function Signup() {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState({ isError: false, msg: "" });
  const [passError, setPassError] = useState({ isError: false, msg: "" });
  const [error, setError] = useState(emailError.isError || passError.isError);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    handleEmailValidation();
    handlePasswordValidation();
  }

  function handleEmailValidation() {
    if (!validateEmail(email)) {
      setEmailError({ isError: true, msg: "Please add a valid email" });
    }
  }

  function handlePasswordValidation() {
    if (!validatePassword(password)) {
      setPassError({ isError: true, msg: "Please add a valid password" });
    }
  }

  function clearEmailError() {
    setEmailError({ isError: false, msg: "" });
  }

  function clearPassError() {
    setPassError({ isError: false, msg: "" });
  }

  return (
    <Wrapper>
      <Card>
        <Logo src={theme.id === "light" ? LogoLight : LogoDark} />
        <Heading>Join thousands of learners from around the world </Heading>
        <TextOne>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </TextOne>
        <Form mt={34}>
          <Input
            key="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={clearEmailError}
          />
          {emailError.isError ? (
            <ErrorMsg>Please add a valid email</ErrorMsg>
          ) : null}

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={clearPassError}
          />
          {passError.isError && (
            <ErrorMsg>Please add a valid password</ErrorMsg>
          )}
          <AccentButton mt={22} width="100%" onClick={handleSubmit}>
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
          Adready a member? <Link to="/login">Login</Link>
        </TextOtherLogin>
      </Card>
      <Footer>
        <span>created by Rushil</span> <span>devchallenges.io</span>
      </Footer>
    </Wrapper>
  );
}
