import React, { useEffect } from "react";

import Banner from "../components/Banner";
import TextCard from "../components/TextCard";
import { Slide } from "react-awesome-reveal";
import Spot from "../components/Spot";
import Content from "../components/Content";

import Footer from "../components/Footer";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";

// import Location from "../components/Location";
import CountUpComponent from "../components/CountUpComponent";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Use Slide component with custom easing and duration for smoothness */}
      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <Banner />
      </Slide>

      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <Content />
      </Slide>

      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        {" "}
        <Spot />
      </Slide>

      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <TextCard />
      </Slide>

      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <Slider1 />
      </Slide>
      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <CountUpComponent />
      </Slide>

      <Slide triggerOnce duration={1000} direction="up" damping={0.3}>
        <Slider2 />
      </Slide>

      <Footer />
    </>
  );
};

export default Home;
