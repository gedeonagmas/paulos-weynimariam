import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const Header = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      closeVideo();
    }
  };

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // This disables continuous scanning for new elements
    });
    wow.init();
  }, []);

  return (
    <div id={id}>
      <div>
        <div
          style={{ marginTop: "-30px" }}
          className="about-area tmp-section-gap about-style-one"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-thumbnails">
                  <div className="thumbnail">
                    <img
                      className="wow zoomIn"
                      alt="corporate_business"
                      src="assets/images/about/01.jpg"
                    />
                    <div className="image-two wow">
                      <img
                        alt="corporate_business"
                        src="assets/images/about/03.jpg"
                      />
                    </div>
                    <div className="image-three wow">
                      <img
                        alt="corporate_business"
                        className=""
                        src="assets/images/about/02.jpg"
                      />
                    </div>
                    <div className="square" />
                    <div className="flower">
                      <img
                        alt="Corporate_Business"
                        src="assets/images/about/flower.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner">
                  <div className="section-head text-align-left section-head-one-side">
                    <div
                      className="section-sub-title wow slideInUp"
                      data-wow-duration=".4s"
                      data-wow-delay=".1s"
                    >
                      <img
                        alt="Corporate_service"
                        src="assets/images/services/section-custom-menubar.png "
                      />
                      <span className="subtitle">ABOUT US</span>
                    </div>
                    <h2
                      className="title split-collab wow slideInUp"
                      data-wow-duration=".4s"
                      data-wow-delay=".2s"
                    >
                      Find out more about our <br /> business consulting
                    </h2>
                  </div>
                  <p className="description wow slideInUp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                    condimentum diam sed, consequat tellus. Quisque ac odio eget
                    ligula gravida efficitur. Nunc facilisis sagittis magna, non
                    venenatis mauris luctus quis.
                  </p>

                  <p className="description wow slideInUp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                    condimentum diam sed, consequat tellus. Quisque ac odio eget
                    ligula gravida efficitur. Nunc facilisis sagittis magna, non
                    venenatis mauris luctus quis.
                  </p>
                  <div
                    className="single-progress-area progress-stye-one wow slideInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".2s"
                  >
                    <div className="progress-top">
                      <p className="name">Consulting Service</p>
                      <span className="parcent">85%</span>
                    </div>
                    <div className="progress">
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="25"
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{
                          width: "85%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="single-progress-area progress-stye-one  wow slideInUp"
                    data-wow-duration=".4s"
                    data-wow-delay=".2s"
                  >
                    <div className="progress-top">
                      <p className="name">Finance Consulting</p>
                      <span className="parcent">66%</span>
                    </div>
                    <div className="progress">
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="25"
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{
                          width: "66%",
                        }}
                      />
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
