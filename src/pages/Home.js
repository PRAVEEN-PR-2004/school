import React, { useEffect } from "react";

import Banner from "../components/Banner";
import TextCard from "../components/TextCard";

import Spot from "../components/Spot";
import Content from "../components/Content";

import Footer from "../components/Footer";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";

import Location from "../components/Location";
import CountUpComponent from "../components/CountUpComponent";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Content />
      <Spot />
      <TextCard />

      <Slider1 />

      <CountUpComponent />
      <Slider2 />

      <Location />
      <Footer />
    </>
  );
};

export default Home;
