import styled from "styled-components/macro";
import { space, layout } from "styled-system";
import { MenuCard } from "../header-menu/index.js";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  // border-bottom : 1px solid #B2B2B2;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    max-width: 1200px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 0;
  &:hover {
    ${MenuCard} {
      display: inline-block;
    }
  }
`;

export const ProfilePic = styled.img`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${layout}
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  color: #333333;
  display: none;

  ${space}
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    max-width: 1200px;
    display: inline-block;
  }
`;
