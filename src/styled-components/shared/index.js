import styled, {createGlobalStyle} from "styled-components/macro";
import {layout,space} from "styled-system"

export const Logo = styled.img`
  height: 18px;
  cursor : pointer;
  ${layout}
  ${space}
`;


export const DirtyWhiteBackground = createGlobalStyle`
body{
background : ${({ theme }) => {
  return theme.id === "light"
    ? theme.colors.dirtyWhite
    : theme.colors.background;
}}}
`;
