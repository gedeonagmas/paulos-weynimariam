import React, { useEffect, useState } from "react";
import HeaderOne from "../header/HeaderOne";
import ProjectMesonary from "./breadcrumb/ProjectMesonary";
import Footer from "../elements/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

function PortfolioSix() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products-list`
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
      <HeaderOne />
      <>
        <ProjectMesonary />
        {/* rmp portfolio mesonary area */}
        <div className="tmp-portfolio-area tmp-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-head">
                  <div className="section-sub-title center-title">
                    <img
                      src="assets/images/services/section-custom-menubar.png "
                      alt="Business_Consulting_services"
                    />
                    <span>OUR PRODUCTS</span>
                  </div>
                  <h2 className="title split-collab">
                    Let's Check Our Best Products
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {currentEvents?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6"
                  >
                    {/* single portfolio-item */}
                    <div className="tmp-single-portfolio-item">
                      <Link
                        to={`/ProductDetails?id=${item?.id}`}
                        className="thumbnail"
                      >
                        <img
                          src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                          alt="personal_portfolio"
                          style={{ height: "250px", width: "100%" }}
                        />
                      </Link>
                      <div className="tmp-inner-content">
                        <Link to={`/ProductDetails?id=${item?.id}`}>
                          <h2 className="title">{item.title}</h2>
                        </Link>
                      </div>
                      <p
                        className="disc mb--20"
                        dangerouslySetInnerHTML={{
                          __html:
                            item?.description?.length > 100
                              ? item?.description?.substring(0, 100)
                              : item?.description,
                        }}
                      ></p>
                      <h5>
                        <Link
                          to={`/ProductDetails?id=${item?.id}`}
                          className="read-more-text"
                        >
                          Read More <i className="fa fa-caret-right"></i>
                        </Link>
                      </h5>
                    </div>
                    {/* single portfolio-item end */}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{ marginBottom: "30px", marginTop: "40px" }}
            className="d-flex justify-content-center"
          >
            {currentEvents?.length > 6 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
        {/* rmp portfolio mesonary area end */}
        <Footer />
      </>
    </div>
  );
}

export default PortfolioSix;
