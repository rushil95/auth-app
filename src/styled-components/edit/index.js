import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { space, layout, flexbox } from "styled-system";
import styled from "styled-components/macro";

export const BackButtonContainer = styled(Link)`
  color: #2d9cdb;
  font-size: 18px;
  line-height: 25px;
  ${space}
  display : flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 18px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    max-width: 900px;
    padding-bottom: 24px;
  }
`;

export const Card = styled.div`
  padding: 24px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin-top: 24px;
    padding: 30px 48px;
  }
`;

export const Row = styled.div`
  margin-top: 24px;
  ${space}
  ${layout}
  ${flexbox}
`;

export const Label = styled.label`
  font-size: 13px;
  line-height: 17px;
  color: #4f4f4f;
`;

export const Form = styled.form`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
  }
`;

export const StyledInputText = styled.input`
  padding: 17px;
  border: 1px solid #828282;
  border-radius: 12px;
  font-size: 13px;
  line-height: 17px;
  display: block;
  width: 100%;
  margin-top: 5px;
  background: ${({ theme }) => theme.colors.dirtyWhite} ${space};

  &:focus {
    background: AliceBlue;
    outline: none;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 17px;
  border: 1px solid #828282;
  border-radius: 12px;
  font-size: 13px;
  line-height: 17px;
  display: block;
  width: 100%;
  margin-top: 5px;
  background: ${({ theme }) => theme.colors.dirtyWhite} ${space};

  &:focus {
    background: AliceBlue;
    outline: none;
  }
`;

export const SaveButton = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  padding: 8px 24px;
  border: none;
  color: white;
  cursor: pointer;
  ${space}
`;

export const BackButton = (props) => (
  <BackButtonContainer mt={25} {...props}>
    <FiChevronLeft style={{ marginRight: 4 }} /> Back
  </BackButtonContainer>
);


export const InvisibleFileInput = styled.input`
  display: none;
`;
