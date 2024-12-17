import React from 'react'
import { Link } from 'react-router-dom';

function PortfolioTwo() {
  return (
    <div>
        
            {/* Start Portfolio area  */}
            <div className="portfolio-area portfolio-style-two tmp-section-gap">
                <div className="container">
                <div className="row mb--30">
                    <div className="col-lg-5 col-md-6">
                    <div className="inner">
                        <div className="section-head section-head-one-side text-align-left">
                        <div className="section-sub-title color-secondary">
                            <span className="subtitle">OUR PORTFOLIO</span>
                        </div>
                        <h2 className="title split-collab">
                            Let's check our best <br /> recent work{" "}
                        </h2>
                        </div>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                        sed, consequat tellus. Quisque ac odio eget ligula gravida
                        efficitur. Nunc facilisis sagittis magna, non venenatis mauris
                        luctus quis.
                        </p>
                        <Link
                        to={'/Project'}
                        className="tmp-btn btn-with-icon btn-secondary"
                        >
                        Our All Works
                        <i className="fa-light fa-arrow-right" />
                        </Link>
                    </div>
                    </div>
                    <div
                    className="col-lg-7 col-md-6 mt_md--80 mt_sm--50 ">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link to={'/ProjectDetails'} className="thumbnail">
                        <img
                            src="assets/images/portfolio/portfolio-two-1.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag">
                        <div className="content">
                            <Link to={'/ProjectDetails'}>
                            <h3 className="name">Janet Phillips</h3>
                            </Link>
                            <div className="designation">Software Developer</div>
                        </div>
                        <Link
                            to={'/ProjectDetails'}
                            className="icon angle-roted border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link to={'/ProjectDetails'} className="thumbnail">
                        <img
                            src="assets/images/portfolio/portfolio-two-2.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link to={'/ProjectDetails'}>
                            <h3 className="name">Doris Sharp</h3>
                            </Link>
                            <div className="designation">Chief Architect</div>
                        </div>
                        <Link
                            to={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link to={'/ProjectDetails'} className="thumbnail">
                        <img
                            src="assets/images/portfolio/portfolio-two-3.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link to={'/ProjectDetails'}>
                            <h3 className="name">Sharon Willis</h3>
                            </Link>
                            <div className="designation">Software Engineer</div>
                        </div>
                        <Link
                            to={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link to={'/ProjectDetails'} className="thumbnail">
                        <img
                            src="assets/images/portfolio/portfolio-two-4.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link to={'/ProjectDetails'}>
                            <h3 className="name">Gina Larsen</h3>
                            </Link>
                            <div className="designation">Product Manager</div>
                        </div>
                        <Link
                            to={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Start Portfolio area  */}
    </div>
  )
}

export default PortfolioTwo