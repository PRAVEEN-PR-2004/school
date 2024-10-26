import React, { useEffect } from "react";

import Banner from "../components/Banner";
import TextCard from "../components/TextCard";
import ImgBanner from "../components/imgbanner";

import Spot from "../components/Spot";
import Content from "../components/Content";
import Address from "../components/Address";
import Familytour from "../components/Familytour";
import Footer from "../components/Footer";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import Slider3 from "../components/Slider3";
import Location from "../components/Location";
import GoalCounter from "../components/GoalCounter";

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
      <ImgBanner />
      <Slider1 />
      <Familytour />
      <Slider2 />
      <Slider3 />
      <GoalCounter />
      <Address />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
