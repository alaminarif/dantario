import React from "react";
import ConfortImg from "../../../Images/t-member-2.jpg";

const Comfort = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 ">
          <img style={{ maxWidth: "500px" }} className="img-fluid rounded" src={ConfortImg} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 pt-5">
          <h2 className="mt-5"> Your comfort is our priority</h2>
          <small className="ms-3 " style={{ color: "#a5c422" }}>
            MY COMPANY VIDEO PRESENTATION
          </small>
          <p className="m-3">
            Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier. Enjoy simple
            things as food, conversation and smile. Forget about uncomfortable social encounters.
          </p>
          <button className="btn px-4 text-light m-4 " style={{ backgroundColor: "#a5c422" }}>
            More Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
