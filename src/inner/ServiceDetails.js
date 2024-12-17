import React, { useEffect, useState } from "react";
import HeaderInner from "../header/HeaderInner";
import BreadcrumbSd from "../inner//breadcrumb/BreadcrumbSd";
import Footer from "../elements/Footer";
import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function ServiceDetails() {
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
          `${process.env.REACT_APP_API_URL}/api/service`
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
    <div className="service-details">
      <div className="">
        <HeaderInner />
        <main>
          <BreadcrumbSd title={service?.serviceName} />
          {/* tmp service section */}
          <div className="tmp-service-section tmp-section-gap">
            <div className="container">
              {error && !loading && !service && <p>{error}</p>}
              {!service && !loading && <p>No services found.</p>}
              {loading ? (
                <p>Loading...</p>
              ) : (
                service && (
                  <>
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="tmp-large-service-detials">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/storage/${service?.banner}`}
                            alt="corporate_business_details"
                            style={{ height: "400px", width: "100%" }}
                          />
                        </div>
                        {/* single service details component */}
                        <div className="single-service-details-component mt--40">
                          <h2 className="title split-collab">
                            {service?.serviceName}
                          </h2>
                          <p
                            className="disc mb--20"
                            dangerouslySetInnerHTML={{
                              __html: service?.description,
                            }}
                          ></p>
                        </div>
                        {/* single service details component end */}
                        <div className="row g-5 mt--10">
                          {JSON.parse(service?.images)?.map((e, i) => {
                            return (
                              <div className="col-lg-6 col-md-6">
                                <img
                                  src={`${process.env.REACT_APP_API_URL}/storage/${e}`}
                                  alt="Corporate_Business"
                                  style={{ height: "250px", width: "100%" }}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <div className="row g-5 mt--10">
                          <div className="col-lg-12">
                            <p
                              className="disc mb--20"
                              dangerouslySetInnerHTML={{
                                __html: service?.details,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 pl--50 pl_md--15 pl_sm--10 mt_md--50 mt_sm--50">
                        <div className="side-bar-details-page">
                          {/* single bar */}
                          <div className="signle-side-bar category-area">
                            <div className="header">
                              <h3 className="title">Other Service</h3>
                            </div>
                            <div className="body">
                              {services?.map((e, i) => {
                                return (
                                  <Link
                                    to={`/ServiceDetails?id=${e?.id}`}
                                    className="single-category"
                                  >
                                    <p>{e?.serviceName}</p>
                                    <i className="fa-light fa-arrow-right" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                          {/* single bar */}
                          <div className="signle-side-bar call-to-action">
                            <div className="easy-call-to-action">
                              <div className="icon-center-call">
                                <i className="fa-light fa-phone" />
                              </div>
                              <h3 className="title">Need any help?</h3>
                              <p className="disc">
                                We are here to help our customer any time. You
                                can call on 24/7 To Answer Your Question.
                              </p>
                              <a href="/contact">Contact</a>
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
          {/* tmp service section end */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ServiceDetails;
