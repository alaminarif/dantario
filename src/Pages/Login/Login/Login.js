import React, { useRef } from "react";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }
  const navigateRegister = () => {
    navigate("/register");
  };
  const resetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    if (email) {
      toast("Sent email");
    } else {
      toast("please Enter your email");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <input type="email" ref={emailRef} name="email" id="" placeholder="Your Email" required />
        <input type="password" name="password" id="" placeholder="Your Password" required />
        <input className="submit" type="submit" value="Log in" />
        <p className="text-danger w-50 mx-auto">{errorElement}</p>
        <p>
          Needed an account?
          <span onClick={navigateRegister} className=" text-color pe-auto text-decoration-none">
            please register
          </span>
        </p>
        <p>
          Forget password?{" "}
          <span className="text-color" onClick={resetPassword}>
            Reset Password
          </span>
        </p>
        <SocialLogin></SocialLogin>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
