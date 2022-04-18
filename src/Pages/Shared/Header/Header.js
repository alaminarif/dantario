import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#04aa6d", color: "#fff" }}>
        <div className="container">
          <Link to="/home" className="navbar-brand text-light">
            Dantario
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link style={{ color: "#fff" }} to="/" className="nav-link " aria-current="page">
                Home
              </Link>
              <Link to="/services" className="text-light nav-link">
                Services
              </Link>
              <Link to="/blogs" className="text-light nav-link">
                Blogs
              </Link>
              <Link to="/about" className="text-light nav-link">
                About Me
              </Link>

              {user ? (
                <Link onClick={handleSignOut} to="/login" className="text-light nav-link">
                  Sign out
                </Link>
              ) : (
                <Link to="/login" className="text-light nav-link">
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
