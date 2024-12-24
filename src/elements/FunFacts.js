import React, { useState, useEffect } from "react";
import CounterUp from "./CounterGlobal";
import WOW from "wowjs";

function FunFacts() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // This disables continuous scanning for new elements
    });
    wow.init();
  }, []);
  return (
    <div>
      {/* Start Main Counter up-5 Area  */}
      <div className="tmp-counterup-area tmp-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title center-title">
                  <img
                    src="assets/images/services/section-custom-menubar.png "
                    alt="Corporate_service"
                  />
                  <span className="subtitle">15000 Trusted</span>
                </div>
                <h2 className="title split-collab">Happy customers</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--20 counter_animation">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12  wow fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".1s"
            >
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={5} />
                </div>
                <h5 className="counter-title">Branches.</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12  wow fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".2s"
            >
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={76} />
                </div>
                <h5 className="counter-title">Employees</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12  wow fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".3s"
            >
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={12} />
                </div>
                <h5 className="counter-title">Years Experience</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12  wow fadeInLeft"
              data-wow-duration=".8s"
              data-wow-delay=".4s"
              data-sal-delay={300}
            >
              <div className="count-box counter-style-4 text-center">
                <div>
                  <CounterUp end={112} />
                </div>
                <h5 className="counter-title">Country</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Main Counter up-5 Area  */}
    </div>
  );
}

export default FunFacts;
