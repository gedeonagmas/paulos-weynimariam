import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

function ServiceOne({ type }) {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // This disables continuous scanning for new elements
    });
    wow.init();
  }, []);

  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/service`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchEvents();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  // Total number of pages
  const totalPages = Math.ceil(events.length / itemsPerPage);

  // Logic for handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateText = (text, length) => {
    if (typeof text !== "string") {
      return "";
    }
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div>
      <div>
        <div className="tmp-services-area services-style--1 background-image-services bg_image tmp-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-head">
                  <div className="section-sub-title center-title">
                    <img
                      alt="Business_Consulting_services"
                      src="assets/images/services/section-custom-menubar.png "
                    />
                    <span>OUR SERVICES</span>
                  </div>
                  <h2 className="title split-collab">Our Provided Services</h2>
                </div>
              </div>
            </div>

            <div className="row g-5">
              {currentEvents?.map((item, i) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInLeft"
                    data-wow-duration=".8s"
                    data-wow-delay=".1s"
                  >
                    <div className="single-services service-style-one">
                      <div className="services-inner  with-shadow card-bg-color">
                        <div className="thumbnail">
                          <img
                            alt="Business consulting services"
                            src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                            style={{ height: "200px", width: "100%" }}
                          />
                        </div>
                        <div className="services-content">
                          <Link to={`/ServiceDetails?id=${item?.id}`}>
                            <h5 className="title">
                              {truncateText(item?.serviceName, 20)}
                            </h5>
                          </Link>
                          <p
                            className="desctiption"
                            dangerouslySetInnerHTML={{
                              __html: truncateText(item?.description, 70),
                            }}
                          ></p>
                          <Link
                            className="icon angle-roted"
                            to={`/ServiceDetails?id=${item?.id}`}
                          >
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {type !== "home" && (
              <div
                style={{ marginBottom: "30px", marginTop: "40px" }}
                className="d-flex justify-content-center"
              >
                {currentEvents?.length > 4 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            )}
            <div className="row">
              <div className="col-lg-12">
                <div className="services-bottom">
                  <div className="services-bottom-inner">
                    <p className="description">
                      Our success as consultants will depend on the essential
                      rightness of the advice.
                    </p>
                    <p className="description">
                      Want to learn more About us?
                      <button className="btn-simple">Click here</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOne;
