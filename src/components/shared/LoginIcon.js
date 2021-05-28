import styled from "styled-components/macro";

export const IconContainer = styled.div`
  height: 42px;
  width: 42px;
  border: 1px solid #828282;
  border-radius : 50%;
  display:flex;
  align-items : center;
  justify-content : center;
  color : #828282;
  font-size : 18px;

`;

export default function LoginIcon({icon : Icon}) {
  return (
    <IconContainer>
      <Icon />
    </IconContainer>
  );
}
