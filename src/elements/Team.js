import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

function Team() {
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
          `${process.env.REACT_APP_API_URL}/api/teams-list`
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
      <>
        {/* Start team area  */}
        <div className="team-area tmp-section-gap bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-head">
                  <div className="section-sub-title center-title">
                    <img
                      src="assets/images/services/section-custom-menubar.png "
                      alt="Corporate services"
                    />
                    <span>OUR EXPERT TEAM</span>
                  </div>
                  <h2 className="section-title split-collab">
                    Meet Our Expert Team
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {currentEvents?.map((item) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInLeft"
                    data-wow-duration=".8s"
                    data-wow-delay=".1s"
                  >
                    <div className="single-team">
                      <Link to={"/TeamDetails"} className="thumbnail">
                        <img
                          src={`${process.env.REACT_APP_API_URL}/storage/${item.image}`}
                          alt="Corporate team"
                          style={{ width: "100%", height: "400px" }}
                        />
                      </Link>
                      <div className="content">
                        <div className="team-name content-with-bg">
                          <Link to={"/TeamDetails"} className="name-area">
                            <h6 className="name">{item?.full_name}</h6>
                          </Link>
                          <div className="designation">{item?.position}</div>
                        </div>
                        <div
                          style={{ color: "white" }}
                          className="share-icon-style-one"
                        >
                          {item?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* End team area  */}
      </>
    </div>
  );
}

export default Team;
