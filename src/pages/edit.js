import React, { useEffect, useState, useRef } from "react";
import Header from "../components/shared/Header";
import { DirtyWhiteBackground } from "../styled-components/shared";
import { Heading, LightGrayText } from "../styled-components/profile";
import { useFormik } from "formik";
import ProfilePic from "../components/shared/ProfileImage";
import * as Yup from "yup";
import firebase, { db } from "../firebase";
import { useAuth } from "../context/AuthProvider";
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
  InvisibleFileInput,
} from "../styled-components/edit";
import { ErrorMsg } from "../styled-components/signup";
import { useUserData } from "../context/UserDataProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProfile() {
  const { userInfo, getUserInfo, isDataLoadedOnce } = useUserData();
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef();
  const initialValues = {
    name: userInfo.name,
    email: userInfo.email,
    bio: userInfo.bio,
    phone: userInfo.phone,
  };
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!isDataLoadedOnce) {
      getUserInfo();
    }
  }, [getUserInfo, isDataLoadedOnce]);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email"),
      phone: Yup.number()
        .test("length", "Length must be greater than 6", (value) => {
          if (value) {
            return value.toString().length > 6;
          } else {
            return true;
          }
        })
        .typeError("Invalid phone"),
    }),
    onSubmit: handleSave,
    enableReinitialize: true,
  });

  function handleSave(values) {
    // e.preventDefault();
    setIsSaving(true);
    const docRef = db.collection("users").doc(currentUser.uid);
    const newValues = { ...values };
    const reqObj = {};

    Object.entries(newValues).forEach(([key, value]) => {
      if (value) {
        reqObj[key] = value;
      }
    });
    docRef
      .set(reqObj, { merge: true })
      .then(() => {
        getUserInfo();
      })
      .catch((err) => {
        console.error(err);
      });
    setIsSaving(false);
    toast.success("Details updated");
  }

  function openFileUploadDialog() {
    fileInputRef.current.click();
  }

  function handleFileInputChange(e) {
    const { files } = e.target;
    const splitName = files[0].name.split(".");
    const fileFormat = splitName[splitName.length - 1];

    const profileImageRef = firebase
      .storage()
      .ref()
      .child(`images/profile/${currentUser.uid}`);
    profileImageRef
      .put(files[0], { contentType: `image/${fileFormat}` })
      .then((snapshot) => {
        getUserInfo();
        toast.success("Photo uploaded. Updating...");
      });
  }

  return (
    <>
      <DirtyWhiteBackground />
      <Header profileImg={userInfo.profilePic} />
      <Container>
        <BackButton to="/" />
        <Card>
          <Heading>Change Info</Heading>
          <LightGrayText mt="8px">
            Changes will be reflected to every services
          </LightGrayText>
          <Row mt={26} display="flex" alignItems="center">
            <ProfilePic height={72} width={72} src={userInfo.profilePic} />
            <LightGrayText
              display="inline-block"
              ml={30}
              textTransform="uppercase"
              style={{ cursor: "pointer" }}
              onClick={openFileUploadDialog}
            >
              Change Photo
            </LightGrayText>
            <InvisibleFileInput
              ref={fileInputRef}
              type="file"
              accept="image/jpeg, image/png"
              name="profileImageInput"
              onChange={handleFileInputChange}
            />
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
              {formik.touched.phone && formik.errors.phone ? (
                <ErrorMsg>{formik.errors.phone}</ErrorMsg>
              ) : null}
            </Row>
            <Row>
              <Label>Email</Label>
              <StyledInputText
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email.."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></StyledInputText>
              {formik.touched.email && formik.errors.email ? (
                <ErrorMsg>{formik.errors.email}</ErrorMsg>
              ) : null}
            </Row>
            <SaveButton mt={24} type="submit" disabled={isSaving}>
              Save
            </SaveButton>
          </Form>
        </Card>
      </Container>
      <ToastContainer position="bottom-right" />
    </>
  );
}
