import React, { useEffect, useState } from "react";
import HeaderInner from "../header/HeaderInner";
import ProjectDetails from "./breadcrumb/ProjectDetails";
import Footer from "../elements/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
      <HeaderInner />
      <>
        <ProjectDetails title={service?.title} />

        {/* Start Projects Details area  */}
        <div className="projects-details-area tmp-section-gap">
          <div className="container">
            {error && !loading && !service && <p>{error}</p>}
            {!service && !loading && <p>No services found.</p>}
            {loading ? (
              <p>Loading...</p>
            ) : (
              service && (
                <>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="projects-details-inner">
                        <div className="thumbnail position-relative">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/storage/${service?.banner}`}
                              alt="projects-details"
                              style={{height:'500px',width:'100%'}}
                          />
                        </div>
                        <div style={{marginTop:"50px"}} className="clients-projects-details">
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
                                  <div className="col-lg-6 col-md-6 gap-4 col-sm-12 col-12">
                                    <div className="thumbnail">
                                      <img
                                        src={`${process.env.REACT_APP_API_URL}/storage/${e}`}
                                        alt="project details"
                                        style={{height:'300px',width:'100%'}}
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
