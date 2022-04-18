import React from "react";
import MoreInFo from "../MoreInFo/MoreInFo";
import service1 from "../../../Images/hc-1.png";
import service2 from "../../../Images/hc-2.png";
import service3 from "../../../Images/hc-3.png";
import service4 from "../../../Images/hc-4.png";
import service5 from "../../../Images/hc-5.png";
import service6 from "../../../Images/hc-6.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Teeth Whitening",
      discription: "Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide loremis",
      img: service1,
    },
    {
      id: 2,
      name: "Dental Calculus",
      discription: "Types of bridges may vary, depending upon how they are fabricated and the way they anchor to the adjacent teeth",
      img: service2,
    },
    {
      id: 3,
      name: "Prevention",
      discription: "Types of bridges may vary, depending upon how they are fabricated and the way they anchor to the adjacent teeth",
      img: service3,
    },
    {
      id: 4,
      name: "Tooth Protection",
      discription: "There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics",
      img: service4,
    },
    {
      id: 5,
      name: "Dental Implants",
      discription: "The implant fixture is first placed, so that it is likely to osseointegrate, then a dental prosthetic is adde",
      img: service5,
    },
    {
      id: 6,
      name: "Dental Care",
      discription: "We provide a wide range of oral health care services to patients, from routine checkups to fitting braces",
      img: service6,
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">Services</h2>
      <div className="row ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
