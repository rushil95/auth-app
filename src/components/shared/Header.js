import React from "react";
import {
  HeaderContainer,
  UserInfo,
  ProfilePic,
  UserName,
} from "../../styled-components/header";
import HeaderMenu from "../../styled-components/header-menu/index.js";
import Logo from "./Logo";
import Avatar from "../../assets/avatar.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <UserInfo>
        <ProfilePic src={Avatar} alt="Your picture" />{" "}
        <UserName ml={15}>Xanthe Neal</UserName>
        <HeaderMenu />
      </UserInfo>
    </HeaderContainer>
  );
}



