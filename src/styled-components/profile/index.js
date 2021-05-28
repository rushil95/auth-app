import { system, space, typography, layout } from "styled-system";
import styled, { createGlobalStyle } from "styled-components/macro";
import { Link } from "react-router-dom";

export const DirtyWhiteBackground = createGlobalStyle`
body{
background : ${({ theme }) => {
  return theme.id === "light"
    ? theme.colors.dirtyWhite
    : theme.colors.background;
}}}
`;

export const ProfilePic = styled.img`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${layout}
`;

export const Heading = styled.h2`
  font: 400 24px/33px "Noto Sans";
  color: black;
  ${space}
  ${typography}
`;

export const TextBelowHeading = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  margin-top: 7px;
  text-align: center;
`;

export const ProfileCard = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin-top: 44px;
  }
`;

export const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 24px 22px;
  align-items: center;
`;

export const RoundedGrayOutlineButton = styled(Link)`
  padding: 10px 30px;
  border: 1px solid #828282;
  border-radius: 12px;
  color: #828282;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const textTransform = system({
  textTransform: true,
});

export const LightGrayText = styled.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  color: #828282;
  ${textTransform}
  ${space}
  ${layout}
`;

export const Row = styled.div`
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Wrapper = styled.div`
  ${Row} + ${Row} {
    border-top: 1px solid #e0e0e0;
  }
`;
