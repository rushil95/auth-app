import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components/macro";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import Input from "../components/shared/Input";
import LoginIcon from "../components/shared/LoginIcon";
import { FaGoogle } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { validateEmail } from "../utils/helpers";
import {
  Wrapper,
  Card,
  Footer,
  Heading,
  Form,
  AccentButton,
  TextOtherLogin,
  OtherLoginContainer,
  Logo,
  ErrorMsg,
} from "../styled-components/signup";
import { useAuth } from "../context/AuthProvider";
import LoadingAnimation from "react-loader-spinner";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const auth = useAuth();
  const theme = useContext(ThemeContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validate,
  });

  async function handleSubmit(values) {
    setIsLoading(true);
    await auth.login(values.email, values.password);
    setIsLoading(false);
    history.push("/");
  }

  function validate(values) {
    let errors = {};

    if (!values.email) {
      errors.email = "Email required";
    } else if (!validateEmail(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.password) {
      errors.password = "Password Required";
    }
    return errors;
  }

  return (
    <Wrapper>
      <Card>
        <Logo src={theme.id === "light" ? LogoLight : LogoDark} />
        <Heading>Login</Heading>

        <Form mt={34} onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg>{formik.errors.email}</ErrorMsg>
          ) : null}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autocomplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg>{formik.errors.password}</ErrorMsg>
          ) : null}
          <AccentButton type="submit" mt={22} width="100%">
            {isLoading ? (
              <LoadingAnimation type="TailSpin" color="white" height={20} />
            ) : (
              "Start coding now"
            )}
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
