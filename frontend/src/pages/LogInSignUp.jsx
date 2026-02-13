import React from "react";
import "../CSS/LoginSignup.css";
const LogInSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text " placeholder="your name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="logisignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p> By continuing , i agree to the terms of use & privacy police.</p>
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
