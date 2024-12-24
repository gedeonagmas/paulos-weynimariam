import React from "react";
import HeaderOne from "../header/HeaderOne";
import Project from "./breadcrumb/Project";
import Footer from "../elements/Footer";
import { Link } from "react-router-dom";

function Appoinment() {
  return (
    <div className="service-details">
      <div className="">
        <HeaderOne />
        <main>
          <Project />
          <div className="portfolio-area portfolio-style-three tmp-section-gap bg_image bg-image-none">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/potrfolio-10.jpg"
                        alt="corporate business"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">Detaism Mode</h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link 
                        to={"/ProjectDetails"}
                        className="icon angle-roted border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/portfolio-11.jpg"
                        alt="corporate business"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">
                            Design pervin
                          </h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link
                        to={"/ProjectDetails"}
                        className="icon icon--30 radius-circle border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right transform-rotate-318" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/portfolio-12.jpg"
                        alt="business Corporate portfolio"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">
                            Irin Developer
                          </h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link
                        to={"/ProjectDetails"}
                        className="icon icon--30 radius-circle border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right transform-rotate-318" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/portfolio-12.jpg"
                        alt="business Corporate portfolio"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">
                            Irin Development
                          </h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link
                        to={"/ProjectDetails"}
                        className="icon icon--30 radius-circle border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right transform-rotate-318" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/portfolio-12.jpg"
                        alt="business Corporate portfolio"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">
                            pervin Design
                          </h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link
                        to={"/ProjectDetails"}
                        className="icon icon--30 radius-circle border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right transform-rotate-318" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="portfolio-inner">
                    <Link
                      to={"/ProjectDetails"}
                      className="thumbnail"
                      data-tmp-cursor="lg"
                      data-tmp-cursor-text="View Details"
                    >
                      <img
                        src="assets/images/portfolio/portfolio-15.jpg"
                        alt="corporate business"
                      />
                    </Link>
                    <div className="portfolio-tag bg-gradiant">
                      <div className="content">
                        <Link to={"/ProjectDetails"}>
                          <h3 className="name animated fadeIn">Irin Studioo</h3>
                        </Link>
                        <div className="designation">Financial advisory</div>
                      </div>
                      <Link
                        to={"/ProjectDetails"}
                        className="icon angle-roted border-none bg-color-white"
                      >
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Appoinment;
