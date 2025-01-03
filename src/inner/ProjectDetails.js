import React, { useEffect, useState } from "react";
import HeaderOne from "../header/HeaderOne";
import ProjectDetails from "./breadcrumb/ProjectDetails";
import Footer from "../elements/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Preloader from "../components/Preloader";

function PortfolioSix() {
  const id = useLocation()?.search?.split("?id=")[1];
  const [service, setService] = useState(); // Single service object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState();

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return; // Skip fetch if id is not available
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products-list`
        );
        const filteredService = response.data.find(
          (service) => service.id === Number(id)
        );
        setServices(response.data);
        setService(filteredService);
      } catch (error) {
        setError("Error fetching products data");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  return (
    <div>
      <HeaderOne />
      <>
        <ProjectDetails title={service?.title} />

        {/* Start Projects Details area  */}
        <div className="projects-details-area tmp-section-gap">
          <div className="container">
            {error && !loading && !service && <p>{error}</p>}
            {!service && !loading && <p>No Products found.</p>}
            {loading ? (
              <Preloader />
            ) : (
              service && (
                <>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="blog-details-left-area border-bottom">
                        <div className="thumbnail position-relative">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/storage/${service?.banner}`}
                            alt="projects-details"
                            style={{ height: "500px", width: "100%" }}
                          />
                        </div>
                        <div
                          style={{ marginTop: "50px" }}
                          className="clients-projects-details"
                        >
                          <div className="projects-details-wrapper">
                            <h3 className="title">{service?.title}</h3>
                            <p
                              className="description"
                              dangerouslySetInnerHTML={{
                                __html: service?.description,
                              }}
                            ></p>
                          </div>
                          <div className="projects-details-wrapper">
                            <div className="row">
                              {JSON.parse(service?.images)?.map((e, i) => {
                                return (
                                  <div className="col-lg-6">
                                    <div className="thumbnail-50">
                                      <img
                                        src={`${process.env.REACT_APP_API_URL}/storage/${e}`}
                                        alt="project details"
                                        style={{
                                          height: "300px",
                                          width: "100%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <p
                              className="description mt--30"
                              dangerouslySetInnerHTML={{
                                __html: service?.details,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 pl--50 pl_md--10 pl_sm--10 mt_md--50 mt_sm--50">
                      <div className="side-bar-details-page">
                        {/* single bar */}

                        {/* single bar end */}
                        <div className="signle-side-bar recent-post">
                          <div className="header">
                            <h3 className="title">Other Products</h3>
                          </div>
                          <div className="body mt--50">
                            {services?.map((e, i) => {
                              return (
                                <div className="single-blog-recent-post-sidebar">
                                  <Link
                                    to={`/ProductDetails?id=${e?.id}`}
                                    className="thumbnail"
                                  >
                                    <img
                                      src={`${process.env.REACT_APP_API_URL}/storage/${e?.banner}`}
                                      alt="product"
                                      style={{ height: "200px", width: "100%" }}
                                    />
                                    <div className="inner">
                                      <span className="post-time">
                                        <i className="fa-regular fa-clock" />
                                        {new Date(
                                          e?.created_at
                                        )?.toDateString()}
                                      </span>
                                      <h6 className="title">{e?.title}</h6>
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
        {/* Start Projects Details area  */}

        <Footer />
      </>
    </div>
  );
}

export default PortfolioSix;
