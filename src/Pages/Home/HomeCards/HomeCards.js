import React from "react";
import card1 from "../../../Images/hc-1.png";
import card2 from "../../../Images/hc-2.png";
import card3 from "../../../Images/hc-3.png";

const HomeCards = () => {
  return (
    <div className="row">
      <div className="card col-12 col-md-6 col-lg-4 mb-3 px-3 py-5 bg-primary text-light">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-2">
            <img src={card1} className="img-fluid rounded-start w-50" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Tooth Protection</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-12 col-md-6 col-lg-4 mb-3 px-3 py-5 bg-warning text-light">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-2">
            <img src={card2} className="img-fluid rounded-start w-50" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Teeth Whitening</h5>
              <p className="card-text">Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide loremis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-12 col-md-6 col-lg-4 mb-3 px-3 py-5 bg-success text-light">
        <div className="row g-0 d-flex align-items-center">
          <div className="col-md-2 ">
            <img src={card3} className="img-fluid rounded-start w-75" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Cosmetic Dentistry</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
