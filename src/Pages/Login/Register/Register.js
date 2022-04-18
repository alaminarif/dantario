import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/home");
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2>Register`</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input type="email" name="email" id="" placeholder="Your Email" required />
        <input type="password" name="password" id="" placeholder="Your Password" required />
        <input className="submit" type="submit" value="Submit" />
        <p>
          Already accout Login?{" "}
          <span className="text-primary" onClick={navigateLogin}>
            Register
          </span>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
