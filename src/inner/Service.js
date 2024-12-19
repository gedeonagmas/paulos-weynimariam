import React from "react";
import HeaderInner from "../header/HeaderInner";
import Breadcrumb from "../inner/Breadcrumb";
import ServiceOne from "../elements/ServiceOne";
import WorkingProcessThree from "../elements/WorkingProcessThree";
import Team from "../elements/Team";
import TestimonialsBrand from "../elements/TestimonialsBrand";
import Footer from "../elements/Footer";

function Service() {
  return (
    <div className="">
      <HeaderInner />
      <main>
        <Breadcrumb />
        <ServiceOne />
        {/* <WorkingProcessThree /> */}
        {/* <Team /> */}
        <TestimonialsBrand />
        <Footer />
      </main>
    </div>
  );
}

export default Service;
