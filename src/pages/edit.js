import React from "react";
import styled from "styled-components/macro";
import Header from "../components/shared/Header";
import { DirtyWhiteBackground } from "../styled-components/shared";
import { Heading, LightGrayText } from "../styled-components/profile";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { space, layout, flexbox } from "styled-system";
import ProfilePic from "../components/shared/ProfileImage";
import { Footer } from "../styled-components/signup";

const BackButtonContainer = styled(Link)`
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

const Container = styled.div`
  margin: 0 auto;
  padding: 0 18px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    max-width: 900px;
    padding-bottom: 24px;
  }
`;

const BackButton = (props) => (
  <BackButtonContainer mt={25} {...props}>
    <FiChevronLeft style={{ marginRight: 6 }} /> Back
  </BackButtonContainer>
);

const Card = styled.div`
  padding: 24px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin-top: 24px;
    padding: 30px 48px;
  }
`;

const Row = styled.div`
  margin-top: 24px;
  ${space}
  ${layout}
  ${flexbox}
`;

const Label = styled.label`
  font-size: 13px;
  line-height: 17px;
  color: #4f4f4f;
`;

const Form = styled.form`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
  }
`;

const StyledInputText = styled.input`
  padding: 17px;
  border: 1px solid #828282;
  border-radius: 12px;
  font-size: 13px;
  line-height: 17px;
  display: block;
  width: 100%;
  margin-top: 5px;
  background: ${({ theme }) => theme.colors.dirtyWhite} ${space};
`;

const StyledTextArea = styled.textarea`
  padding: 17px;
  border: 1px solid #828282;
  border-radius: 12px;
  font-size: 13px;
  line-height: 17px;
  display: block;
  width: 100%;
  margin-top: 5px;
  background: ${({ theme }) => theme.colors.dirtyWhite} ${space};
`;

const SaveButton = styled.button`
  background: #2f80ed;
  border-radius: 8px;
  padding: 8px 24px;
  border: none;
  color: white;
  ${space}
`;

export default function EditProfile() {
  return (
    <>
      <DirtyWhiteBackground />
      <Header />
      <Container>
        <BackButton to="/" />
        <Card>
          <Heading>Change Info</Heading>
          <LightGrayText mt="8px">
            Changes will be reflected to every services
          </LightGrayText>
          <Row mt={26} display="flex" alignItems="center">
            <ProfilePic height={72} width={72} />
            <LightGrayText
              display="inline-block"
              ml={30}
              textTransform="uppercase"
              style={{ cursor: "pointer" }}
            >
              Change Photo
            </LightGrayText>
          </Row>
          <Form>
            <Row mt={32}>
              <Label>Name</Label>
              <StyledInputText
                type="text"
                placeholder="Enter your name.."
              ></StyledInputText>
            </Row>
            <Row>
              <Label>Bio</Label>
              <StyledTextArea
                placeholder="Enter your bio.."
                rows={4}
              ></StyledTextArea>
            </Row>
            <Row>
              <Label>Phone</Label>
              <StyledInputText
                type="text"
                placeholder="Enter your phone.."
              ></StyledInputText>
            </Row>
            <Row>
              <Label>Email</Label>
              <StyledInputText
                type="email"
                placeholder="Enter your email.."
              ></StyledInputText>
            </Row>
            <SaveButton mt={24} type="submit">
              Save
            </SaveButton>
          </Form>
        </Card>
      </Container>
    </>
  );
}
