import React from "react";
import firebase from 'firebase/compat/app';
import {auth} from "../firebase"
import logo from "../assests/logo.png"
function SignIn() {
  function signInWithGoogle() {
    console.log('clicked');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      
      <button className="btn btn-secondary my-2"
        onClick={signInWithGoogle}
      >
        <img src={logo} className="mx-2" alt="lo" style={{"width" : "30px"}}/>
        Login With Google
      </button>
    </div>
  );
}

export default SignIn;