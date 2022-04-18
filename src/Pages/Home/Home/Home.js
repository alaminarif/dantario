import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import Comfort from "../Comfort/Comfort";
import HomeCards from "../HomeCards/HomeCards";
import Technology from "../Technology/Technology";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCards></HomeCards>
      <Services></Services>
      <Technology></Technology>
      <Comfort></Comfort>
    </div>
  );
};

export default Home;
