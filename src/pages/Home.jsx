import React from "react";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import CEX from "../components/CEX/CEX";
import Section4 from "../components/Section4";

const Home = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <CEX />
      <Section4 />
    </>
  );
};

export default Home;
