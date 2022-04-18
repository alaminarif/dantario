import React from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { id, name, discription, img } = service;
  const navigate = useNavigate();
  const handleMoreInfo = (id) => {
    navigate(`/moreinfo/${id}`);
  };
  console.log(service);
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
      <div className="homeCard">
        <img src={img} alt="" />
        <h5 className="card-title">{name}</h5>
        <p className="mt-4">{discription}</p>
        <button onClick={() => handleMoreInfo(id)} className="btn  px-4" style={{ backgroundColor: "#04aa6d", color: "#fff" }}>
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default Service;
