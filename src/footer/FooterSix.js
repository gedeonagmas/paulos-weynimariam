import React from "react";
import { Link } from "react-router-dom";

function FooterSix() {
  return (
    <div>
      {/* Start Footer Area  */}
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg-image-none tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one mt--0">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link to={"/"}>
                      <img src="assets/images/logo/logo-02.svg" alt="logo" />
                    </Link>
                  </div>
                  <p className="description">
                    Proindddd Pretium Sem Libero, Nec Aliquet Augue Lobortis In.
                    Phasellus Nibh Quam, Molestie Id Est Sit Amet, Luctus
                    Pulvinar
                  </p>
                  <div className="day-time">
                    <div className="icon">
                      <i className="fa-solid fa-alarm-clock" />
                    </div>
                    <div className="content">
                      <div className="day">Sunday - Friday:</div>
                      <div className="time">9:00 AM – 8:00 PM</div>
                    </div>
                  </div>
                  <ul className="social-icons solid-social-icons rounded-social-icons">
                    <li>
                      <Link to={"#"}>
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="fa-brands fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                  <h5 className="ft-title">Services</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to={"/About"}>About Company</Link>
                    </li>
                    <li>
                      <Link to={"/TeamOne"}>Meet Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/Service"}>Our Services</Link>
                    </li>
                    <li>
                      <Link to={"/Blog"}>News &amp; Media</Link>
                    </li>
                    <li>
                      <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/FaqOne"}>Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                  <h5 className="ft-title">Solutions</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to={"#"}>Brand</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Counter</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"#"}>News</Link>
                    </li>
                    <li>
                      <Link to={"#"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/FaqOne"}>Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                  <h5 className="ft-title">Company</h5>
                  <ul className="ft-link">
                    <li>
                      <Link href="pricing.html">Pricing</Link>
                    </li>
                    <li>
                      <Link to={"/TeamOne"}>Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/Service"}>Our Services</Link>
                    </li>
                    <li>
                      <Link to={"/Blog"}>News &amp; Media</Link>
                    </li>
                    <li>
                      <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/FaqOne"}>Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to={"/About"}>Company</Link>
                    </li>
                    <li>
                      <Link to={"/TeamOne"}> Our Team</Link>
                    </li>
                    <li>
                      <Link to={"/Service"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/Blog"}>News &amp; Media</Link>
                    </li>
                    <li>
                      <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/FaqOne"}>Support</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area-one bg-colorsame">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper">
                <p>
                  © Copyright 2024. All Rights Reserved by{" "}
                  <Link to={"#"}>Themes-Park</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area  */}
    </div>
  );
}

export default FooterSix;
