import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXgxkC91M-M7V-lUq8VMLUoSMOo2asHjs",
  authDomain: "linkedin-clone-14e57.firebaseapp.com",
  projectId: "linkedin-clone-14e57",
  storageBucket: "linkedin-clone-14e57.appspot.com",
  messagingSenderId: "205052381699",
  appId: "1:205052381699:web:58a7b0bf066fb477415c36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
