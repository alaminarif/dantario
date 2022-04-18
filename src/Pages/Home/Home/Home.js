import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCards></HomeCards>
      <Services></Services>
    </div>
  );
};

export default Home;
