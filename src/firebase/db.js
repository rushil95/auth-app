// import firebase, { db } from "./index";

// const profileImageRef = firebase
//   .storage()
//   .ref()
//   .child(`images/profile/${firebase.auth().currentUser.uid}`);

// const docRef = db.collection("users").doc(firebase.auth().currentUser.uid);

// export function getUserProfileData() {
//   return docRef.get();
// }

// export function setUserProfileData(userInfo) {
//   return docRef.set(userInfo, { merge: true });
// }

// export function uploadProfileImage(img){
//   return profileImageRef.put(img)
// }
