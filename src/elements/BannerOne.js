import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const BannerOne = ({ id }) => {
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

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Check screen size on mount
    window.addEventListener("resize", checkScreenSize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="tmp-banner-swiper-one-area" id={id}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
        className="mySwiper-banner-one"
        speed={500}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1200: { slidesPerView: 1 },
          900: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          580: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-1 bg_image banner-one-height-control tmp-section-gap">
            <div className="shape-image-banner-one">
              <img
                src="assets/images/banner/shape/01.png"
                alt="banner"
                className="one"
              />
              <img
                src="assets/images/banner/shape/02.png"
                alt="banner"
                className="two"
              />
              <img
                src="assets/images/banner/shape/03.png"
                alt="banner"
                className="three"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div
                    style={isSmallScreen ? {} : { marginTop: "-120px" }}
                    className="banner-one-main-wrapper"
                  >
                    <div className="inner">
                      <span className="sub-title">
                        Vento Manufacturing Company
                      </span>
                      <h1 className="title">
                        Built for Quality, Driven by Precision
                      </h1>
                      <p className="disc">
                        Indulge in the rich taste of Vento, expertly brewed{" "}
                        <br /> with the finest ingredients for a refreshingly
                        smooth experience that stands out.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"/contact"} className="tmp-btn btn-primary">
                          Let's Work To Gather
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-2 bg_image banner-one-height-control tmp-section-gap">
            <div className="shape-image-banner-one">
              <img
                src="assets/images/banner/shape/01.png"
                alt="banner"
                className="one"
              />
              <img
                src="assets/images/banner/shape/02.png"
                alt="banner"
                className="two"
              />
              <img
                src="assets/images/banner/shape/03.png"
                alt="banner"
                className="three"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div
                    style={isSmallScreen ? {} : { marginTop: "-120px" }}
                    className="banner-one-main-wrapper"
                  >
                    <div className="inner">
                      <span className="sub-title">
                        Refreshing Excellence in Every Sip
                      </span>
                      <h1 className="title">
                        Quality, and Flavor in Every Bottle
                      </h1>
                      <p className="disc">
                        Experience the art of Vento-making, where tradition
                        meets innovation <br /> to deliver a beverage that’s
                        bold in flavor, smooth in taste, and crafted to
                        perfection.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"/contact"} className="tmp-btn btn-primary">
                          Let's Work To Gather
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-3 bg_image banner-one-height-control tmp-section-gap">
            <div className="shape-image-banner-one">
              <img
                src="assets/images/banner/shape/01.png"
                alt="banner"
                className="one"
              />
              <img
                src="assets/images/banner/shape/02.png"
                alt="banner"
                className="two"
              />
              <img
                src="assets/images/banner/shape/03.png"
                alt="banner"
                className="three"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div
                    style={isSmallScreen ? {} : { marginTop: "-120px" }}
                    className="banner-one-main-wrapper"
                  >
                    <div className="inner">
                      <span className="sub-title">
                        Vento, Perfected for You
                      </span>
                      <h1 className="title">Where Flavor Meets Quality</h1>
                      <p className="disc">
                        From brewing to bottling, we craft each Vento with care,
                        ensuring <br /> every sip is a moment of pure
                        refreshment and unmatched quality.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"/contact"} className="tmp-btn btn-primary">
                          Let's Work To Gather
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default BannerOne;
