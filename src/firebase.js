import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCTzCwwsxADWNAJM37MZUay5HpajN1_IVY",
    authDomain: "unichat-178d8.firebaseapp.com",
    projectId: "unichat-178d8",
    storageBucket: "unichat-178d8.appspot.com",
    messagingSenderId: "542871754405",
    appId: "1:542871754405:web:bc2973cc35d368fd03df4c"
  }).auth();
