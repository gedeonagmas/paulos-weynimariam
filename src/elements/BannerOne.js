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
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Business consulting solution</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users.  <br />we can also
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"Service"} className="tmp-btn btn-primary">
                          Get Started Now
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
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Corporate Solutions Business</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. <br /> we can also
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"Service"} className="tmp-btn btn-primary">
                          Get Started Now
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
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Powering Business Growth</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users.  <br />we can also
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link to={"Service"} className="tmp-btn btn-primary">
                          Get Started Now
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
