import React from "react";
import { redirect } from "react-router-dom";

import signUp from "../utils/auth/signUp.util";

import "../assets/css/Login.css";

const SignUp = () => {
  const emailRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const ageRef = React.useRef(null);

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, []);

  const handleSubmit = () => {
    console.log(emailRef);
    if (emailRef.current && pwdRef.current) {
      signUp(emailRef.current.value, pwdRef.current.value, {
        name: nameRef.current.value,
        age: ageRef.current.value,
        phone: phoneRef.current.value,
      })
        .then((credentials) => {
          return redirect("/");
        })
        .catch((err) => {
          setError(err.message || "An unknown error occured");
        });
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        {error && <p className="login-error error">{error}</p>}
        <div className="login-title">SignUp</div>
        <input
          type="email"
          label="Email"
          id="email"
          ref={emailRef}
          className="login-name"
          placeholder="Email"
        />
        <input
          type="text"
          label="Usernam"
          id="username"
          ref={nameRef}
          className="login-name"
          placeholder="Username"
        />
        <input
          type="number"
          label="Phone number"
          id="phone"
          ref={phoneRef}
          className="login-name"
          placeholder="Phone number (optional)"
        />
        <input
          type="number"
          label="Age"
          id="age"
          ref={ageRef}
          className="login-name"
          placeholder="Age"
        />
        <input
          type="password"
          label="password"
          id="password"
          ref={pwdRef}
          className="login-password"
          placeholder="enter password"
        />
        <button className="login-button" onClick={handleSubmit}>
          SignUp{" "}
        </button>
        <div className="login-social"></div>
      </div>
    </div>
  );
};

export default SignUp;