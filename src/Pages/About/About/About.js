import React from "react";
import profile from "../../../Images/profile.png";

const About = () => {
  return (
    <div className="row">
      <h2 className=" text-center  my-5">About Me</h2>
      <div className=" col-12 col-md-6  mx-auto ">
        <div>
          <img className="border border-3 rounded border-primary" src={profile} alt="" />
        </div>
        <div className="">
          <h6 style={{ textAlign: "justify" }} className="mt-5 mx-3  justify">
            First of all, thank you for Programminmg Hero, for giving me this opportunity to introduce myself. <br />
            My name is Arifur Rahman. I am interested in Frontend web Development.I have completed my Diploma in Engineering in computer science from
            Barishal Polytechnic Institute in the year 2022 and I got aggregate marks of 3 CGPA out of 4 CGPA.
            <br />
            Thank You!
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
