import styled from "styled-components/macro";
import { space, layout, color } from "styled-system";
import { IconContainer } from "../../components/shared/LoginIcon";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 475px;
    justify-content: center;
  }
`;

const Card = styled.div`
  padding: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border: 1px solid #bdbdbd;
    border-radius: 24px;
    padding: 48px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  color: #bdbdbd;
  margin: 14px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 5px;
  }
`;

const Heading = styled.h2`
  width: 75%;
  margin-top: 32px;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
`;

const TextOne = styled.p`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

const Form = styled.form`
  ${space}
`;

const AccentButton = styled.button`
  ${color}
  ${space}
  ${layout}
   background: ${({ theme }) => theme.colors.button};
  color: white;
  font-weight: 600;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
  border: none;
  border-radius: 8px;
  line-height: 22px;
  cursor: pointer;
`;

const TextOtherLogin = styled.p`
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: #828282;
  text-align: center;
  ${space}
`;

const OtherLoginContainer = styled.div`
  ${space}
  display: flex;
  align-items: center;
  justify-content: center;
  ${IconContainer}+${IconContainer} {
    margin-left: 20px;
  }
`;

const ErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 11px;
  color: red;
  margin-left: 5px;
`;

const Logo = styled.img``;

export {
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
};
