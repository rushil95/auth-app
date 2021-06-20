import React, { useEffect } from "react";

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
import { useUserData } from "../context/UserDataProvider";

export default function Profile() {
  const {  userInfo, getUserInfo, isDataLoadedOnce } = useUserData();

  useEffect(() => {
    if (!isDataLoadedOnce) {
      getUserInfo();
    }
  }, [isDataLoadedOnce, getUserInfo]);

  return (
    <>
      <DirtyWhiteBackground />
      <Wrapper>
        <Header profileImg={userInfo.profilePic} />
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
            <RoundedGrayOutlineButton to="/edit">Edit</RoundedGrayOutlineButton>
          </RowTop>
          <Row>
            <LightGrayText textTransform="uppercase">Photo</LightGrayText>
            <ProfilePic
              src={userInfo.profilePic}
              alt="Your picture"
              height={72}
              width={72}
            />
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Name</LightGrayText>
            <Value>
              {userInfo.name ? userInfo.name : "Edit to set your name"}
            </Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Bio</LightGrayText>
            <Value>
              {userInfo.bio ? userInfo.bio : "Edit to set your bio"}
            </Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Email</LightGrayText>
            <Value>
              {userInfo.email ? userInfo.email : "Edit to set your email"}
            </Value>
          </Row>
          <Row>
            <LightGrayText textTransform="uppercase">Phone</LightGrayText>
            <Value>
              {userInfo.phone ? userInfo.phone : "Edit to set your phone"}
            </Value>
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
