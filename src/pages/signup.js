import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components/macro";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import Input from "../components/shared/Input";
import LoginIcon from "../components/shared/LoginIcon";
import { FaGoogle } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link, useHistory } from "react-router-dom";
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
import LoadingAnimation from "react-loader-spinner";
import firebase, { db } from "../firebase";

export default function Signup() {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const isError = false;
    //const isError = handleEmailValidation() | handlePasswordValidation();
    if (!isError) {
      try {
        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        db.collection("users")
          .doc(user.uid)
          .set({ email: user.email })
          .then((ref) => {
            console.log(ref);
          })
          .catch((err) => {
            console.error(err);
          });

        history.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  }

  function handleEmailValidation() {
    if (!validateEmail(email)) {
      setError((prev) => ({
        ...prev,
        email: "Please add a valid email",
      }));
      return true;
    }
    return false;
  }

  function handlePasswordValidation() {
    if (!validatePassword(password)) {
      console.log("Password error");
      setError((prev) => ({
        ...prev,
        password: "Please add a valid password",
      }));
      return true;
    }
    return false;
  }

  function clearEmailError() {
    setError((prev) => {
      const copy = {
        ...prev,
      };
      delete copy.email;
      return copy;
    });
  }

  function clearPassError() {
    setError((prev) => {
      const copy = {
        ...prev,
      };
      delete copy.password;
      return copy;
    });
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
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onFocus={clearEmailError}
          />
          {error.email ? <ErrorMsg>Please add a valid email</ErrorMsg> : null}

          <Input
            name="password"
            id="password"
            autocomplete="new-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onFocus={clearPassError}
          />
          {error.password && <ErrorMsg>Please add a valid password</ErrorMsg>}
          <AccentButton
            mt={22}
            width="100%"
            onClick={handleSubmit}
            disabled={isLoading}
          >
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
          Adready a member? <Link to="/login">Login</Link>
        </TextOtherLogin>
      </Card>
      <Footer>
        <span>created by Rushil</span> <span>devchallenges.io</span>
      </Footer>
    </Wrapper>
  );
}
