import React, { useEffect }  from 'react';
import WOW from "wowjs";
import { Link } from 'react-router-dom';



function ServiceFour() {  
    useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // This disables continuous scanning for new elements
    });
    wow.init();
  }, []);
  return (
    <div>
        


    <div className="best-service-we-provide pt--60 tmp-section-gapBottom">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-6.svg" alt="corporate_Business_Services_agency" />
                        </div>
                        <div className="content">
                            <h2 className="title">Business Stratagy</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link to={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-1.svg" alt="corporate_Business_Services_agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Custom website design</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link to={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-2.svg" alt="corporate_Business_Services_Agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Data Analysis</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link to={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".7s">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-3.svg" alt="corporate_Business_Services_agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Saving &amp; Investments</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link to={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}

export default ServiceFour