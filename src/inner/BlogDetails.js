import React, { useEffect, useState } from "react";
import HeaderInner from "../header/HeaderInner";
import BreadcrumbBlog from "../inner//breadcrumb/BreadcrumbBlog";
import Footer from "../elements/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function BlogColTwo() {
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
          `${process.env.REACT_APP_API_URL}/api/event_list`
        );
        const filteredService = response.data.find(
          (service) => service.id === Number(id)
        );
        setServices(response.data);
        setService(filteredService);
      } catch (error) {
        setError("Error fetching service data");
        console.error("Error fetching services:", error);
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
          <BreadcrumbBlog title={service?.eventName} />
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
                        <div className="blog-details-left-area border-bottom">
                          <div className="thumbnail-top">
                            <img
                              src={`${process.env.REACT_APP_API_URL}/storage/${service?.banner}`}
                                alt="Corporate_business"
                                style={{height:'400px',width:'100%'}}
                            />
                          </div>
                          <div className="blog-details-discription">
                            <div className="category-area">By Admin</div>
                            <h3 className="title split-collab">
                              {service?.eventName}
                            </h3>
                            <p
                              className="disc"
                              dangerouslySetInnerHTML={{
                                __html: service?.description,
                              }}
                            ></p>
                          </div>

                          <div className="row g-5">
                            {JSON.parse(service?.images)?.map((e, i) => {
                              return (
                                <div className="col-lg-6">
                                  <div className="thumbnail-50">
                                    <img
                                      src={`${process.env.REACT_APP_API_URL}/storage/${e}`}
                                      alt=""
                                      style={{height:'300px',width:'100%'}}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="blog-details-discription">
                            <p
                              className="disc"
                              dangerouslySetInnerHTML={{
                                __html: service?.details,
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 pl--50 pl_md--10 pl_sm--10 mt_md--50 mt_sm--50">
                        <div className="side-bar-details-page">
                          {/* single bar */}

                          {/* single bar end */}
                          <div className="signle-side-bar recent-post">
                            <div className="header">
                              <h3 className="title">Recent Post</h3>
                            </div>
                            <div className="body mt--50">
                              {services?.map((e, i) => {
                                return (
                                  <div className="single-blog-recent-post-sidebar">
                                    <Link
                                      to={`/BlogDetails?id=${e?.id}`}
                                      className="thumbnail"
                                    >
                                      <img
                                        src={`${process.env.REACT_APP_API_URL}/storage/${e?.banner}`}
                                        alt="blog-Post"
                                        style={{height:'200px',width:'100%'}}
                                      />
                                      <div className="inner">
                                        <span className="post-time">
                                          <i className="fa-regular fa-clock" />
                                          {new Date(
                                            e?.created_at
                                          )?.toDateString()}
                                        </span>
                                        <h6 className="title">
                                          {e?.eventName}
                                        </h6>
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
       
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default BlogColTwo;
