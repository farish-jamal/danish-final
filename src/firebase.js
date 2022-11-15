import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// App initilization
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtciU49LxwI2BNO4rrr3hYKdMnHuQlglU",
  authDomain: "skilled-skill.firebaseapp.com",
  projectId: "skilled-skill",
  storageBucket: "skilled-skill.appspot.com",
  messagingSenderId: "609452599976",
  appId: "1:609452599976:web:581240ea3c1665d9e4f09d",
  measurementId: "G-4BFWLY6FPS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };