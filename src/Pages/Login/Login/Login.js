import React from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  if (user) {
    navigate("/home");
    console.log(user);
  }
  const navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Your Email" required />
        <input type="password" name="password" id="" placeholder="Your Password" required />
        <input className="submit" type="submit" value="Submit" />
      </form>
      <p>
        New to genius car?
        <button onClick={navigateRegister} className=" btn btn-link pe-auto text-decoration-none">
          please register
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};
export default Login;
