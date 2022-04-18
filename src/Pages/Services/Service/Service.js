import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, discription, img } = service;
  const navigate = useNavigate();
  const handleMoreInfo = () => {
    navigate("/moreinfo");
  };
  console.log(service);
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <img style={{ width: "70px", height: "70px" }} src={img} alt="" />
      <h5 className="card-title">{name}</h5>
      <p className="w-75 mx-auto ">{discription}</p>
      <button onClick={handleMoreInfo} className="btn btn-primary px-4">
        MoreInfo
      </button>
    </div>
  );
};

export default Service;
