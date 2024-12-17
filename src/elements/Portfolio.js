import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Portfolio() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products-list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const truncateText = (text, length) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div>
      {/* tmp product area start */}
      <div className="tmp-product-area tmp-section-gapTop bg-product-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head color-white">
                <div className="section-sub-title center-title">
                  <img
                    src="assets/images/services/section-custom-menubar.png "
                    alt="Corporate_service"
                  />
                  <span className="subtitle">OUR PRODUCTS</span>
                </div>
                <h2 className="title split-collab">
                  Let's Check Our Best Products{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="row">
            <div className="col-lg-12">
              {/* product swiper area start */}
              <div className="product-swiper-area-one">
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
                  slidesPerView={5}
                  spaceBetween={30}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    1200: { slidesPerView: 5 },
                    900: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    580: { slidesPerView: 2 },
                    450: { slidesPerView: 1 },
                    0: { slidesPerView: 1 },
                  }}
                >
                  {currentEvents.map((item) => (
                    <SwiperSlide>
                      <div
                        className="signle-product-start"
                        data-tmp-cursor="lg text-secondary transparent fw-bold"
                        data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                      >
                        <Link
                          to={`/ProductDetails?id=${item?.id}`}
                          className="thumbnail"
                        >
                          <img
                            src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                            alt="corporate_business"
                            style={{ width: "300px", height: "250px" }}
                          />
                        </Link>
                        <div className="inner-content">
                          <Link to={`/ProductDetails?id=${item?.id}`}>
                            <h5 className="title">
                              {item?.title?.length > 45
                                ? item?.title?.substring(0, 45) + "..."
                                : item?.title}{" "}
                            </h5>
                          </Link>
                          {/* <span
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.description?.substring(0, 60) + "...",
                            }}
                            className="designation"
                          ></span> */}
                          <div className="tag" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                </Swiper>
              </div>
              {/* product swiper area end */}
            </div>
          </div>
        </div>
      </div>
      {/* tmp product area end */}
    </div>
  );
}

export default Portfolio;
