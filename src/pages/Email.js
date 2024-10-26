import React, { useEffect } from "react";
import Form from "../components/Form";
import ParticlesBg from "particles-bg";
import Location from "../components/Location";
import Footer from "../components/Footer";
const Email = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Form />

      <ParticlesBg type="polygon" bg={true} />
      <Location />
      <Footer />
    </>
  );
};

export default Email;
