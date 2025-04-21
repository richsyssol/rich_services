import React from "react";

import FeatureDetail from "./FeatureDetail";
import Steps from "./Steps";
import OurWorkSection from "./OurWork";
import Faq from "./Faq";
import PricingSection from "./PriceSec";

function Features() {
  return (
    <div>
      <FeatureDetail />
      <Steps />
      <Faq />
      <PricingSection />
      <OurWorkSection />
    </div>
  );
}

export default Features;
