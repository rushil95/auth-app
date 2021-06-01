import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "../firebase";

const auth = firebase.auth();
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChanged);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  function handleAuthStateChanged(user) {
    setCurrentUser(user);
    setIsLoading(false);
  }

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    console.log("Signing out");
    await auth.signOut();
    console.log("Signed out");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {!isLoading && props.children}
    </AuthContext.Provider>
  );
}
