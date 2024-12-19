import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // side menu active
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleCloseMenu = () => {
    setIsMenuVisible(false);
    setIsOverlayVisible(false);
  };

  const handleOverlayClick = () => {
    setIsMenuVisible(false);
    setIsOverlayVisible(false);
  };

  // mobile menu
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuhome) => {
    setOpenMenu(openMenu === menuhome ? null : menuhome);
  };

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
      <header className="tmp-header-area-start header-one">
        <div style={{ height: "45px" }} className="header-top-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-inner">
                  <div className="left-information-area">
                    <div className="location-area">
                      <i className="fa-light fa-phone" />
                      <Link to="#">{contact?.phone1}</Link>
                    </div>
                    <div className="location-area">
                      <i className="fa-light fa-location-dot" />
                      <Link to="#">{contact?.address}</Link>
                    </div>
                    <div className="working-time">
                      <i className="fa-light fa-clock" />
                      <p>Working Hours: 2:00 AM – 11:00 PM</p>
                    </div>
                  </div>
                  <div className="right-header-top">
                    <div className="social-area-transparent">
                      <span>Follow on</span>
                      {contact?.facebookLink && (
                        <Link to={contact?.facebookLink}>
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      )}
                      {contact?.twitterLink && (
                        <Link to={contact?.twitterLink}>
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      )}
                      {contact?.linkedInLink && (
                        <Link to={contact?.linkedInLink}>
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      )}
                      {contact?.instagramLink && (
                        <Link to={contact?.instagramLink}>
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      )}
                      {contact?.telegramLink && (
                        <Link to={contact?.telegramLink}>
                          <i className="fa-brands fa-telegram" />
                        </Link>
                      )}
                      {contact?.whatsUpLink && (
                        <Link to={contact?.whatsUpLink}>
                          <i className="fa-brands fa-whatsapp" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-header-one-wrapper">
                <div
                  style={{ padding: "2px", height: "55px", width: "100%" }}
                  className={`tmp-nav-area-one header--sticky ${
                    isSticky ? "sticky" : ""
                  }`}
                >
                  <div className="logo-area-start">
                    <Link style={{ padding: "5px" }} className="logo" to="/">
                      <img
                        style={{ padding: "5px", height: "60px" }}
                        alt="Corporate_business_logo"
                        src="assets/images/logo/logo-01.png"
                      />
                    </Link>
                  </div>

                  <Nav />
                  <div className="actions-area">
                    <div
                      className="tmp-side-collups-area"
                      id="side-collups"
                      onClick={handleMenuToggle}
                    >
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 20 16"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect fill="#1F1F25" height="2" width="20" y="14" />
                        <rect fill="#1F1F25" height="2" width="20" y="7" />
                        <rect fill="#1F1F25" height="2" width="20" />
                      </svg>
                    </div>
                    <Link
                      style={{
                        height: "40px",
                        marginRight: "20px",
                        textAlign: "start",
                      }}
                      className="tmp-btn btn-primary"
                      to="Contact"
                    >
                      <p style={{ marginTop: "-8px", color: "white" }}>
                        Get Help?
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="side-hide" className={isMenuVisible ? "show" : ""}>
        <div className="top-area">
          <a href="index.html" className="logo-area">
            <img src="assets/images/logo/logo-03.png" alt="logo" />
          </a>
          <div className="close-icon-area">
            <div id="close-slide__main" onClick={handleOverlayClick}>
              <i className="fa-solid fa-x" />
            </div>
          </div>
        </div>
        <div className="body">
          <h5 className="title">
            Transforming your ideas into digital reality
          </h5>
          <p className="disc">
            Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque.
          </p>
          <div className="short-contact-area-side-collups">
            {/* single contact information */}
            <div className="single-contact-information-side">
              <i className="fa-solid fa-phone" />
              <div className="information">
                <span>Call Now</span>
                <a href="#" className="number">
                  {contact?.phone1}
                </a>
              </div>
            </div>
            {/* single contact information end */}
            {/* single contact information */}
            <div className="single-contact-information-side">
              <i className="fa-light fa-envelope" />
              <div className="information">
                <span>Mail Us</span>
                <a href="#" className="number">
                  {contact?.email1}
                </a>
              </div>
            </div>
            {/* single contact information end */}
            {/* single contact information */}
            <div className="single-contact-information-side">
              <i className="fa-sharp fa-light fa-location-dot" />
              <div className="information">
                <span>Our Address</span>
                <a href="#" className="number">
                  {contact?.address}
                </a>
              </div>
            </div>
            {/* single contact information end */}
          </div>
          {/* social area start */}
          <ul className="social-icons solid-social-icons rounded-social-icons">
            <li>
              {" "}
              {contact?.facebookLink && (
                <Link to={contact?.facebookLink}>
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              )}
            </li>
            <li>
              {contact?.twitterLink && (
                <Link to={contact?.twitterLink}>
                  <i className="fa-brands fa-twitter" />
                </Link>
              )}
            </li>
            <li>
              {contact?.linkedInLink && (
                <Link to={contact?.linkedInLink}>
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              )}
            </li>
            <li>
              {contact?.instagramLink && (
                <Link to={contact?.instagramLink}>
                  <i className="fa-brands fa-instagram" />
                </Link>
              )}
            </li>
            <li>
              {" "}
              {contact?.telegramLink && (
                <Link to={contact?.telegramLink}>
                  <i className="fa-brands fa-telegram" />
                </Link>
              )}
            </li>
            {/* <li>
              {contact?.whatsUpLink && (
                <Link to={contact?.whatsUpLink}>
                  <i className="fa-brands fa-whatsapp" />
                </Link>
              )}
            </li> */}
          </ul>
          {/* social area end */}
        </div>

        {/* mobile menu area start */}
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li className="">
                <Link to="/" className="main" onClick={() => toggleMenu(1)}>
                  Home
                </Link>
              </li>

              <li className="">
                <Link
                  to="/About"
                  className="main"
                  onClick={() => toggleMenu(1)}
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  to="/Service"
                  className="main"
                  onClick={() => toggleMenu(1)}
                >
                  Service
                </Link>
              </li>
              <li className="">
                <Link
                  to="/Product"
                  className="main"
                  onClick={() => toggleMenu(1)}
                >
                  Product
                </Link>
              </li>
              <li className="">
                <Link to="/Blog" className="main" onClick={() => toggleMenu(1)}>
                  News & Event
                </Link>
              </li>

              <li>
                <Link className="mobile-menu-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* mobile menu area end */}
      </div>

      <div
        id="overlay_every-where"
        className={isOverlayVisible ? "bgshow" : ""}
        onClick={handleOverlayClick}
      ></div>
    </div>
  );
}

export default Header;
