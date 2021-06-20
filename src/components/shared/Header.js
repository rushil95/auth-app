import React from "react";
import {
  HeaderContainer,
  UserInfo,
  ProfilePic,
  UserName,
} from "../../styled-components/header";
import HeaderMenu from "../../styled-components/header-menu/index.js";
import Logo from "./Logo";

export default function Header(props) {
  const {profileImg} = props
  return (
    <HeaderContainer>
      <Logo/>
      <UserInfo>
        <ProfilePic src={profileImg} alt="Your picture" />{" "}
        <UserName ml={15}>Xanthe Neal</UserName>
        <HeaderMenu />
      </UserInfo>
    </HeaderContainer>
  );
}



