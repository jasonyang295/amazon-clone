import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz-Uo_wHdA1ZIa8ciKW_XaijQZY9A12N4",
    authDomain: "clone-built-with-react.firebaseapp.com",
    projectId: "clone-built-with-react",
    storageBucket: "clone-built-with-react.appspot.com",
    messagingSenderId: "305900706336",
    appId: "1:305900706336:web:8194f2a02a056f15b5ba45",
    measurementId: "G-PJJQM8EMP3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };