import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import axios from "axios";

function TestimonialsBrand() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/testimonial-list`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="testimonial-with-brand bg-1 bg_image">
        {/* Start Testimonial Area  */}
        <div className="testimonial-brand-area tmp-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials-button-area">
                  <div className="section-head text-align-left">
                    <div className="section-sub-title">
                      <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                      />
                      <span className="subtitle">Client’s Testimonials</span>
                    </div>
                    <h2 className="title split-collab">
                      What People Say About <br /> Our Company
                    </h2>
                  </div>
                  <div className="button-next-prev">
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Slider main container */}
                <div className="swiper-style-one tmp-section-gapBottom">
                  <div className="swiper-container-style-two">
                    {/* Additional required wrapper */}
                    <Swiper
                      // install Swiper modules
                      modules={[
                        Navigation,
                        Pagination,
                        EffectFade,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      className="mySwiper-portfolio-1"
                      speed={500}
                      slidesPerView={2}
                      spaceBetween={30}
                      loop={true}
                      autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      breakpoints={{
                        1200: { slidesPerView: 2 },
                        900: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        580: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                      }}
                    >
                      {currentProducts?.map((item) => (
                        <SwiperSlide>
                          <div className="single-card card-horizontal">
                            <div className="card-inner">
                              <div className="content">
                                <div className="rating rating-style-three">
                                  <div className="stars-group">
                                    <div className="star">
                                      <i className="fa-solid fa-star" />
                                      <i className="fa-solid fa-star" />
                                      <i className="fa-solid fa-star" />
                                      <i className="fa-solid fa-star" />
                                      <i className="fa-solid fa-star-half-stroke" />
                                    </div>
                                  </div>
                                </div>
                                <p
                                  className="description"
                                  dangerouslySetInnerHTML={{
                                    __html: item?.description,
                                  }}
                                ></p>
                                <div className="content content-without-bg">
                                  <div className="name">{item?.name}</div>
                                  <div className="designation">
                                    {item?.position}
                                  </div>
                                </div>
                              </div><div className="icon icon-quote">
                                  <i className="fa-duotone fa-quote-left" />
                                </div>
                              <div className="thumbnail">
                                <img
                                  src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                                  alt="testimonial"
                                  style={{ width: "80px", height: "80px",borderRadius:'50%' }}
                                />
                                
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}

                      {/* <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div> */}
                    </Swiper>
                    {/* If we need navigation buttons */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Testimonial Area  */}
        {/* <div className="brand-area tmp-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-inner tmp-section-gapTop">
                  <ul className="brand-list brand-style-1 justify-content-center justify-content-lg-between">
                    <li
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brand/brand-1.png"
                          alt="Brand Image"
                        />
                      </a>
                    </li>
                    <li
                      data-sal-delay={250}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brand/brand-2.png"
                          alt="Brand Image"
                        />
                      </a>
                    </li>
                    <li
                      data-sal-delay={350}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brand/brand-3.png"
                          alt="Brand Image"
                        />
                      </a>
                    </li>
                    <li
                      data-sal-delay={450}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brand/brand-4.png"
                          alt="Brand Image"
                        />
                      </a>
                    </li>
                    <li
                      data-sal-delay={550}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <a href="#">
                        <img
                          src="assets/images/brand/brand-5.png"
                          alt="Brand Image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TestimonialsBrand;
