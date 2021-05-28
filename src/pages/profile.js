import React from "react";
import Avatar from "../assets/avatar.png";
import Header from "../components/shared/Header";
import {
  Wrapper,
  Heading,
  TextBelowHeading,
  ProfileCard,
  RowTop,
  LightGrayText,
  RoundedGrayOutlineButton,
  ProfilePic,
  Row,
  Value,
} from "../styled-components/profile";

import { DirtyWhiteBackground } from "../styled-components/shared";

export default function Profile() {
  return (
    <>
      <DirtyWhiteBackground />
      <Wrapper>
        <Header />
        <Heading mt={27} textAlign="center">
          Personal Info
        </Heading>
        <TextBelowHeading>
          Basic info, like your name and photo
        </TextBelowHeading>
        <ProfileCard>
          <RowTop>
            <div style={{ flexBasis: "55%" }}>
              <Heading>Profile</Heading>
              <LightGrayText>
                Some info may be visible to other people
              </LightGrayText>
            </div>
            <RoundedGrayOutlineButton to="/edit">
              Edit
            </RoundedGrayOutlineButton>
          </RowTop>
          <Row>
            <LightGrayText textTransform="uppercase">Photo</LightGrayText>
            <ProfilePic
              src={Avatar}
              alt="Your picture"
              height={72}
              width={72}
            />
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Name</LightGrayText>
            <Value>Xanthe Neal</Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Bio</LightGrayText>
            <Value>I am a sea lion. I want fish.</Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Email</LightGrayText>
            <Value>sealion@wateranimals.com</Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Password</LightGrayText>
            <Value>********</Value>
          </Row>
        </ProfileCard>
      </Wrapper>
    </>
  );
}
