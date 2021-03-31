import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      return user;
      // ...
    });
};
