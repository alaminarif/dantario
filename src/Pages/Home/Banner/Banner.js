import React, { useState } from "react";
import Banner1 from "../../../Images/4.jpg";
import Banner2 from "../../../Images/banner-2.jpg";
import Banner3 from "../../../Images/wellcome.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="First slide" />
        <Carousel.Caption>
          <h3>High Innovative Technology </h3>
          <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Teeth Whitening</h3>
          <p>Bleaching methods use carbamide peroxide which reacts with water to form hydrogen peroxide loremis</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Cosmetic Dentistry</h3>
          <p>There are only 2 dental specialties that only focus on dental esthetics: Prosthodontics and Orthodontics</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
