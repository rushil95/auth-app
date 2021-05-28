import styled from "styled-components/macro";
import { layout, space } from "styled-system";
import Avatar from "../../assets/avatar.png";

export const ProfileImg = styled.img`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${layout}
  ${space}
`;

export default function ProfilePic(props) {
  return <ProfileImg src={Avatar} {...props} />;
}
