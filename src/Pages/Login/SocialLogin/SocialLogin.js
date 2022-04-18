import React from "react";
import Google from "../../../Images/google-logo-png.png";

import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className=" w-25 mx-auto d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <div className=" mx-2">or</div>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      <p className="text-danger">{errorElement}</p>
      <div className="">
        <button onClick={() => signInWithGoogle()} className="btn btn-primary w-25 d-block mx-auto my-3">
          <img style={{ width: "30px" }} src={Google} alt="" />
          <span className="px-2"> Google SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
