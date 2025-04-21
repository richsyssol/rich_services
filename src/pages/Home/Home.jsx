import React from "react";
import Herosection from "./Herosection";
import About from "./About";
import Testimonial from "./Testimonial";
import Whyus from "./Whyus";
import FeaturesSection from "./FeaturesSection";
import Ads from "./Ads";

function Home() {
  return (
    <div>
      <Herosection />
      <About />
      <FeaturesSection />
      <Ads />
      <Whyus />
      <Testimonial />
    </div>
  );
}

export default Home;
