import React, { createContext, useContext, useState } from "react";
import firebase, { db } from "../firebase";
import { useAuth } from "./AuthProvider";

const UserDataContext = createContext();

export default function UserDataProvider (props) {
  const { currentUser } = useAuth();
  const inititalState = {
    name: "",
    bio: "",
    email: "",
    password: "",
    phone: "",
    profilePic: "",
  };

  const [isDataLoadedOnce, setisDataLoadedOnce] = useState(false);
  const [userInfo, setUserInfo] = useState(inititalState);
  const [isLoading, setIsLoading] = useState(true);



  const getUserInfo = () => {
    setIsLoading(true);
    const docRef = db.collection("users").doc(currentUser.uid);

    const userInfoPromise = docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserInfo((prev) => {
            const data = doc.data();
            const updatedInfo = { ...prev, ...data };
            return updatedInfo;
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });

    const profileImageRef = firebase
      .storage()
      .ref()
      .child(`images/profile/${currentUser.uid}`);

    const profileImgPromise = profileImageRef.getDownloadURL().then((url) => {
      setUserInfo((prev) => ({ ...prev, profilePic: url }));
    });

    Promise.all([userInfoPromise, profileImgPromise])
      .then(() => {
        setisDataLoadedOnce(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <UserDataContext.Provider
      value={{ userInfo, getUserInfo, isDataLoadedOnce, isLoading }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserDataContext);
};

