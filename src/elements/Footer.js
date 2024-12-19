import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [contact, setContact] = useState();
  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/business-setup`
      );
      setContact(response2?.data);
    };
    fetchCategory();
  }, []);
  return (
    <div>
      <>
        <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
          <div className="container">
            <div style={{ marginTop: "-70px" }} className="row">
              <div className="col-lg-12">
                <div className="subscribe-area subscribe-style-1">
                  <div className="subscribe-inner">
                    <div className="title">Need To work with us?</div>
                    <div className="newsletter-form-1">
                      <Link to="/contact" className="tmp-btn btn-primary">
                        Contact Now{" "}
                        <i className="fa-sharp fa-regular fa-paper-plane" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main footer-style-one">
              <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                  <div className="single-footer-wrapper border-right mr--20">
                    <div className="logo">
                      <Link to="/">
                        <img src="assets/images/logo/logo-02.svg" alt="logo" />
                      </Link>
                    </div>
                    <p className="description">
                      Proinddd Pretium Sem Libero, Nec Aliquet Augue Lobortis
                      In.
                    </p>
                    <div className="day-time">
                      <div className="icon">
                        <i className="fa-solid fa-alarm-clock" />
                      </div>
                      <div className="content">
                        <div className="day">Monday - Friday</div>
                        <div className="time">2:00 AM – 11:00 PM</div>
                      </div>
                    </div>
                    <ul className="social-icons solid-social-icons rounded-social-icons">
                      {contact?.facebookLink && (
                        <li>
                          {" "}
                          <Link to={contact?.facebookLink}>
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                      )}
                      {contact?.twitterLink && (
                        <li>
                          <Link to={contact?.twitterLink}>
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                      )}
                      {contact?.linkedInLink && (
                        <li>
                          <Link to={contact?.linkedInLink}>
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                      )}
                      {contact?.instagramLink && (
                        <li>
                          {" "}
                          <Link to={contact?.instagramLink}>
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                      )}
                      {contact?.telegramLink && (
                        <li>
                          <Link to={contact?.telegramLink}>
                            <i className="fa-brands fa-telegram" />
                          </Link>
                        </li>
                      )}
                      {contact?.whatsUpLink && (
                        <li>
                          <Link to={contact?.whatsUpLink}>
                            <i className="fa-brands fa-whatsapp" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                    <h5 className="ft-title">Quick Link</h5>
                    <ul className="ft-link">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/About"}>About</Link>
                      </li>
                      <li>
                        <Link to={"/Service"}>Our Services</Link>
                      </li>
                      <li>
                        <Link to={"/Product"}>Our Products</Link>
                      </li>
                      <li>
                        <Link to={"/Blog"}>News &amp; Media</Link>
                      </li>
                      <li>
                        <Link to={"/Contact"}>Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-footer-wrapper pr--15">
                    <h5 className="ft-title">Contact</h5>
                    <ul className="ft-link">
                      <li className="ft-location">{contact?.address}</li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <i className="fa-solid fa-envelope-open-text" />
                          </div>
                          <div className="content">
                            <span>E-mail-1:</span>
                            <a to={`mailto:${contact?.email1}`}>
                              {contact?.email1}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <i className="fa-solid fa-envelope-open-text" />
                          </div>
                          <div className="content">
                            <span>E-mail-2:</span>
                            <a to={`mailto:${contact?.email2}`}>
                              {contact?.email2}
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="single-footer-wrapper">
                    <h5 className="ft-title">Call Now:</h5>
                    <ul className="ft-link">
                      <li className="ft-location">
                        5919 Trussville Crossings Pkwy.
                      </li>

                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <i className="fa-light fa-phone" />
                          </div>
                          <div className="content">
                            <span>Phone-1:</span>
                            <a to={`tel:${contact?.phone1}`}>
                              {contact?.phone1}
                            </a>
                            <br />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact">
                          <div className="icon">
                            <i className="fa-light fa-phone" />
                          </div>
                          <div className="content">
                            <span>Phone-2:</span>
                            <a to={`tel:${contact?.phone2}`}>
                              {contact?.phone2}
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright-area-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-wrapper">
                  <p>
                    © Copyright 2024. All Rights Reserved. Developed by{" "}
                    <a href={"https://keradiontechnologies.com"}>
                      Keradion Technologies.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Footer;
