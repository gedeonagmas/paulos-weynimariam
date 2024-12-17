import React, { useEffect, useState } from "react";
import HeaderInner from "../header/HeaderInner";
import BreadcrumbBlog from "../inner/breadcrumb/BreadcrumbBlog";
import Footer from "../elements/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

function ServiceDetails() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/event_list`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  console.log(events, "events");
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
    <div className="service-details">
      <div className="">
        <HeaderInner />
        <main>
          <BreadcrumbBlog />
          {/* latest blog area start */}
          <div className="altest-blog-area tmp-section-gap">
            <div className="container">
              <div className="row g-5">
                {currentEvents.map((item) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-blog blog-style-three">
                      <div className="blog-inner">
                        <div className="thumbnail">
                          <Link to={`/BlogDetails?id=${item?.id}`}>
                            <img
                              src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                              alt="Business Consulting Blog"
                              style={{height:'300px',width:'100%'}}
                            />
                          </Link>
                        </div>
                        <div className="blog-content text-center">
                          <div className="blog-head">
                            <span className="name">
                              {new Date(item?.created_at)?.toDateString()}
                            </span>
                            <span className="designation">By Admin</span>
                          </div>
                          <div className="blog-body">
                            <Link
                              to={`/BlogDetails?id=${item?.id}`}
                              className="title-area"
                            >
                              <h4 className="title">{item?.eventName}</h4>
                            </Link>
                            <Link
                              className="btn-read-more"
                              to={`/BlogDetails?id=${item?.id}`}
                            >
                              <span className="read-more-text">Read More</span>
                              <span className="read-more-icon">
                                <i className="fa-solid fa-arrow-right" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-center">
                  {currentEvents?.length > 6 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* latest blog area end */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ServiceDetails;
