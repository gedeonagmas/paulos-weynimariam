import React from "react";
import HeaderInner from "../header/HeaderInner";
import Breadcrumb from "../inner/Breadcrumb";
import AboutOne from "../elements/AboutOne";
import WorkingProcessThree from "../elements/WorkingProcessThree";
import Team from "../elements/Team";
import TestimonialsBrand from "../elements/TestimonialsBrand";
import Footer from "../elements/Footer";

function about() {
  return (
    <div className="index-one">
      <HeaderInner />
      <main>
        <Breadcrumb />
        <AboutOne />
        <WorkingProcessThree />
        <Team />
        <TestimonialsBrand />
        <Footer />
      </main>
    </div>
  );
}

export default about;