import firebase from "firebase/app";
import auth from "firebase/auth";

const config = {
  apiKey: "AIzaSyCVbR8020B1KknmiyfPvHVcCLncxbjgmNY",
  authDomain: "fir-react-auth-8ee4f.firebaseapp.com",
  projectId: "fir-react-auth-8ee4f",
  storageBucket: "fir-react-auth-8ee4f.appspot.com",
  messagingSenderId: "435266317973",
  appId: "1:435266317973:web:b37b8c782d416a7c77b59c",
};

firebase.initializeApp(config);

export default firebase;
