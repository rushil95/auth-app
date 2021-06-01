import React from "react";
import Header from "../components/shared/Header";
import { DirtyWhiteBackground } from "../styled-components/shared";
import { Heading, LightGrayText } from "../styled-components/profile";
import { useFormik } from "formik";
import ProfilePic from "../components/shared/ProfileImage";
import * as Yup from "yup";
import { db } from "../firebase";
import {
  Container,
  BackButton,
  Card,
  Row,
  Form,
  Label,
  StyledInputText,
  StyledTextArea,
  SaveButton,
} from "../styled-components/edit";
import { ErrorMsg } from "../styled-components/signup";

const inititalValues = { name: "", email: "", bio: "", phone: "" };

export default function EditProfile() {
  const formik = useFormik({
    initialValues: inititalValues,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required(),
      phone: Yup.number()
        .test("length", "Invalid phone", (value) => value.toString().length > 6)
        .typeError("Invalid phone")
        .required(),
    }),
    onSubmit: handleSave,
  });

  function handleSave(values) {
    // e.preventDefault();
    const newValues = { ...formik.values };
    const reqObj = {};

    Object.entries(newValues).forEach(([key, value]) => {
      if (value) {
        reqObj[key] = value;
      }
    });
    console.log(reqObj);
  }

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
          <Form onSubmit={formik.handleSubmit}>
            <Row mt={32}>
              <Label>Name</Label>
              <StyledInputText
                id="name"
                type="text"
                placeholder="Enter your name.."
                value={formik.values.name}
                onChange={formik.handleChange}
              ></StyledInputText>
            </Row>
            <Row>
              <Label>Bio</Label>
              <StyledTextArea
                placeholder="Enter your bio.."
                rows={4}
                id="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
              ></StyledTextArea>
            </Row>
            <Row>
              <Label>Phone</Label>
              <StyledInputText
                type="text"
                id="phone"
                placeholder="Enter your phone.."
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></StyledInputText>
              {formik.touched.phone && formik.errors.phone && (
                <ErrorMsg>{formik.errors.phone}</ErrorMsg>
              )}
            </Row>
            <Row>
              <Label>Email</Label>
              <StyledInputText
                id="email"
                type="email"
                placeholder="Enter your email.."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></StyledInputText>
              {formik.touched.email && formik.errors.email && (
                <ErrorMsg>{formik.errors.email}</ErrorMsg>
              )}
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
