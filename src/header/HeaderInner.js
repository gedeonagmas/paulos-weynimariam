import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function HeaderInner() {
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

  // header side collups area start here

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const pickerRef = useRef(null);

  const languages = [
    { lang: "de", value: "deutsch", label: "Deutsch" },
    { lang: "en", value: "english", label: "English" },
    { lang: "fr", value: "francais", label: "Français" },
    { lang: "it", value: "italiano", label: "Italiano" },
  ];

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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.value);
    setIsOpen(false);
    // Handle redirection or other actions based on language selection
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

  return (
    <div>
      {/* tpm-header-area start */}
      <header
        className={`tmp-header-area-start header-two header-four header--sticky ${
          isSticky ? "sticky" : ""
        }`}
      >
        {/* header-top start */}
        <div className="header-top-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-inner">
                  <div className="left-information-area">
                    <p className="left-top">
                      Using user feedback to creat a million dollar
                    </p>
                    <div className="location-area">
                      <i className="fa-light fa-location-dot" />
                      <a href="#">California, TX 70240</a>
                    </div>
                    <div className="working-time">
                      <i className="fa-light fa-clock" />
                      <p>Working Hours: 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                  <div className="right-header-top">
                    <div className="social-area-transparent">
                      <span>Follow on</span>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header-top end */}
        {/* header mid area start */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-mida-area style-two ">
                <div className="logo-area-start">
                  <a href="/">
                    <img src="assets/images/logo/logo-03.png" alt="logo" />
                  </a>
                </div>
                <Nav />
                {/* <a href="#" class="tmp-btn btn-primary">Get Consulting</a> */}
                <div className="actions-area">
                  <a href="#" className="tmp-btn btn-primary">
                    Need Help?
                  </a>
                  {/* <div class="menu-button" id="search">
                        <i class="fa-light fa-grid-2"></i>
                        </div> */}
                  <div
                    className="tmp-side-collups-area"
                    id="side-collups"
                    onClick={handleMenuToggle}
                  >
                    <svg
                      width={20}
                      height={16}
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y={14} width={20} height={2} fill="#fff" />
                      <rect y={7} width={20} height={2} fill="#fff" />
                      <rect width={20} height={2} fill="#fff" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header mid area end */}
      </header>
      {/* tpm-header-area end */}

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
                  +92 (8800) - 98670
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
                  example@info.com
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
                  66 Broklyant, New York 3269
                </a>
              </div>
            </div>
            {/* single contact information end */}
          </div>
          {/* social area start */}
          <ul className="social-icons solid-social-icons rounded-social-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
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

export default HeaderInner;
