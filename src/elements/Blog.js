import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

function Blog() {
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
    <div>
      {/* Tmp Blog Area Start  */}
      <div className="tmp-blog-area tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title center-title">
                  <img
                    src="assets/images/services/section-custom-menubar.png "
                    alt="Corporate_service"
                  />
                  <span className="subtitle">LATEST BLOG</span>
                </div>
                <h2 className="title split-collab">
                  Latest News &amp; Articles
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            {currentEvents.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col1-2 wow fadeInLeft"
                data-wow-duration=".8s"
                data-wow-delay=".1s"
              >
                <div className="single-blog">
                  <div className="blog-inner">
                    <div className="thumbnail">
                      <Link to={`/BlogDetails?id=${item?.id}`}>
                        <img
                          src={`${process.env.REACT_APP_API_URL}/storage/${item.banner}`}
                          alt="Business Consulting Blog"
                          style={{ width: "100%", height: "300px" }}
                        />
                      </Link>
                      <div className="pmt-blog-meta">
                        <ul className="all-meta">
                          <li className="date">
                            <span>
                              {new Date(item?.created_at)?.toDateString()}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-head.">
                        <p className="name">
                          By Admin{" "}
                          <span style={{ marginLeft: "40px" }}>
                            {new Date(item?.created_at)?.toDateString()}
                          </span>
                        </p>
                      </div>
                      <div className="blog-body">
                        <Link
                          to={`/BlogDetails?id=${item?.id}`}
                          className="title-area"
                        >
                          <h4 className="title">
                            {" "}
                            {item?.eventName?.length > 45
                              ? item?.eventName?.substring(0, 45) + "..."
                              : item?.eventName}{" "}
                          </h4>
                        </Link>
                        <p
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: item?.description?.substring(0, 60) + "...",
                          }}
                        ></p>
                      </div>
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
            ))}
          </div>
        </div>
      </div>
      {/* Tmp Blog Area Start  */}
    </div>
  );
}

export default Blog;
