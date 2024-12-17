import React, { useState, useEffect } from 'react';

function SideBar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuVisible(!isMenuVisible);
    };

    const handleCloseMenu = () => {
        setIsMenuVisible(false);
      };
  return (

    <div>
        <div id="side-hide" className={isMenuVisible ? 'show' : ''}>
            <div className="top-area">
                <a href="index.html" className="logo-area">
                <img src="assets/images/logo/logo-03.png" alt="logo" />
                </a>
                <div className="close-icon-area">
                <div id="close-slide__main">
                    <i className="fa-solid fa-x" />
                </div>
                </div>
            </div>
            <div className="body">
                <h5 className="title">Transforming your ideas into digital reality</h5>
                <p className="disc">
                Sed ut perspiciatis unde omnis natus error voluptatem santium doloremque
                laudantium, totam rem aperiam, eaque.
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
                <nav className="nav-main mainmenu  mainmenu-nav mt--30">
                <ul>
                    <li>
                    <a className="nav-link" href="#home">
                        HOME
                    </a>
                    </li>
                    <li>
                    <a className="nav-link" href="#about">
                        ABOUT
                    </a>
                    </li>
                    <li>
                    <a className="nav-link" href="#service">
                        SERVICES
                    </a>
                    </li>
                    <li>
                    <a className="nav-link" href="#product">
                        PORTFOLIO
                    </a>
                    </li>
                    <li>
                    <a className="nav-link" href="#blog">
                        BLOG
                    </a>
                    </li>
                    <li>
                    <a className="nav-link" href="#contactus">
                        CONTACT
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            {/* mobile menu area end */}
            
        </div>

        
    </div>
  )
}

export default SideBar