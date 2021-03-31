import React from "react";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { LoginContext } from "../../App";
import { signInWithGoogle } from "./firebase";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((user) => {
        console.log(user);
        setLoggedIn(user);
        history.replace(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page bg-light ">
      <div className="login-box bg-white shadow-sm">
        <h1 className="p-4">Login</h1>
        <button className="my-btn" onClick={handleGoogleSignIn}>
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
