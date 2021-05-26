import React from "react";
import styled from "styled-components/macro";
import { Logo } from "../styled-components/shared";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-light.svg";
import Avatar from "../assets/avatar.png";

const Wrapper = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  padding-top: 15px;
`;

const ProfilePic = styled.img`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Heading = styled.h2`
  font: 400 24px/33px "Noto Sans";
  margin-top: 27px;
  text-align: center;
  color: black;
`;

const TextBelowHeading = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  margin-top: 7px;
  text-align: center;
`;


const ProfileCard = styled.div ``

export default function Profile() {
  return (
    <Wrapper>
      <Header>
        <Logo src={LogoLight} alt="devChallenges Logo" />
        <ProfilePic src={Avatar} alt="Your picture" />
      </Header>
      <Heading>Personal Info</Heading>
      <TextBelowHeading>Basic info, like your name and photo</TextBelowHeading>
    </Wrapper>
  );
}
