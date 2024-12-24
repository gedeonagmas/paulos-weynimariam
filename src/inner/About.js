import React from "react";
import HeaderOne from "../header/HeaderOne";
import Breadcrumb from "../inner/Breadcrumb";
import AboutOne from "../elements/AboutOne";
import WorkingProcess from "../elements/WorkingProcess";
import Team from "../elements/Team";
import TestimonialsBrand from "../elements/TestimonialsBrand";
import Footer from "../elements/Footer";

function about() {
  return (
    <div className="index-one">
      <HeaderOne />
      <main>
        <Breadcrumb type="about" />
        <AboutOne />
        <WorkingProcess />
        <Team />
        <TestimonialsBrand />
        <Footer />
      </main>
    </div>
  );
}

export default about;
