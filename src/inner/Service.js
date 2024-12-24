import React from "react";
import HeaderOne from "../header/HeaderOne";
import Breadcrumb from "../inner/Breadcrumb";
import ServiceOne from "../elements/ServiceOne";
import TestimonialsBrand from "../elements/TestimonialsBrand";
import Footer from "../elements/Footer";

function Service() {
  return (
    <div className="">
      <HeaderOne />
      <main>
        <Breadcrumb />
        <ServiceOne />
        <TestimonialsBrand />
        <Footer />
      </main>
    </div>
  );
}

export default Service;
