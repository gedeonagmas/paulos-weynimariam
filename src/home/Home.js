import React from "react";
import HeaderOne from "../header/HeaderOne";
import BannerOne from "../elements/BannerOne";
import AboutOne from "../elements/AboutOne";
import ServiceOne from "../elements/ServiceOne";
import WorkingProcess from "../elements/WorkingProcess";
import FunFacts from "../elements/FunFacts";
import Team from "../elements/Team";
import FaqOne from "../elements/FaqOne";
import TestimonialsBrand from "../elements/TestimonialsBrand";
import Blog from "../elements/Blog";
import Footer from "../elements/Footer";
import Portfolio from "../elements/Portfolio";

function Home() { 
  return (
    <div className="index-one">
      <HeaderOne />
      <main>
        <BannerOne />
        <AboutOne />
        <ServiceOne type="home" />
        <WorkingProcess />
        <Portfolio />
        <FaqOne />
        <FunFacts />
        <Team />
        <TestimonialsBrand />
        {/* <Contact /> */}
        <Blog />
        <Footer />
        {/* <SideBar /> */}
      </main>
    </div>
  );
}

export default Home;
