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
                      About Paulos Weynimariam.
                    </h2>
                  </div>
                  <p className="description wow slideInUp">
                    Welcome to Paulos Weynimariam, a leading name in the
                    manufacturing and distribution of high-quality ventos. With
                    a commitment to innovation and precision, we specialize in
                    crafting products that meet the highest industry standards.
                  </p>

                  <p className="description wow slideInUp">
                    Our expertise lies in providing tailored solutions for
                    diverse industrial and commercial needs, ensuring
                    durability, efficiency, and sustainability.
                  </p>
                  <p className="description wow slideInUp">
                    At Paulos Weynimariam, we pride ourselves on our dedication
                    to excellence, customer satisfaction, and fostering
                    long-term partnerships. Discover how we can bring value to
                    your business with our state-of-the-art manufacturing
                    processes and a team of experts ready to support you every
                    step of the way.
                  </p>
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
