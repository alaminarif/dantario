import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
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
          Already accout Login? <span onClick={navigateLogin}>login</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
