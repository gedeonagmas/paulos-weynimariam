import React, { useState , useEffect }  from 'react';
import { Link } from 'react-router-dom';
import WOW from "wowjs";


function BannerTwo() {
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false, // This disables continuous scanning for new elements
        });
        wow.init();
      }, []);

    const [isOpen, setIsOpen] = useState(false);

    const openVideo = () => {
      setIsOpen(true);
    };
  
    const closeVideo = () => {
      setIsOpen(false);
    };
  
    const handleKeyUp = (e) => {
      if (e.key === 'Escape') {
        closeVideo();
      }
    };
    
    return (
        <div>
            

                <div className="banner-area banner-style-two bg_image tmp-section-gapTop">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
                        <div className="banner-inner">
                            <div
                            className="sub-title"
                            style={{ display: "block" }}
                            data-sal-delay={150}
                            data-sal="slide-up"
                            data-sal-duration={800}
                            >
                            Financial Consulting Agency
                            </div>
                            <h2 className="title split-collab">
                            Prosper in this <br /> volatile market <br /> founding.
                            </h2>
                            <p
                            className="description"
                            data-sal-delay={350}
                            data-sal="slide-up"
                            data-sal-duration={800}
                            >
                            We help small startups grow from idea to millions of users. we can
                            also automate your marketing and customer service.
                            </p>
                            <div
                            className="banner-bottom"
                            style={{ gap: 30 }}
                            data-sal-delay={450}
                            data-sal="slide-up"
                            data-sal-duration={800}
                            >
                            <Link to={'/Contact'} className="tmp-btn btn-secondary">
                                Get Started Now
                            </Link>

                              {/* video icon */}
                              <div className="vedio-icone">
                                    <Link className="video-play-button play-video" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        openVideo();
                                        }}>
                                        <span style={{ borderLeftColor: "var(--color-secondary)" }} />
                                        <p className="text" style={{ color: "black" }}>Play Video</p>
                                    </Link>
                                    
                                    {isOpen && (
                                        <div className="video-overlay open" onClick={closeVideo}>
                                        <iframe
                                            width="560"
                                            height="515"
                                            src="assets/images/video/intro-2.mp4"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                        <Link className="video-overlay-close" onClick={(e) => {
                                            e.preventDefault();
                                            closeVideo();
                                            }}>×</Link>
                                        </div>
                                    )}

                                    {/* Listen for the Escape key to close the video */}
                                    {isOpen && <div onKeyUp={handleKeyUp} tabIndex="0"></div>}
                                </div>
                                {/* video icon */}
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2  order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
                        <div className="banner-two-thumbnail">
                            <div className="thumbnail">
                            <img src="assets/images/banner/banner-two-2.png" alt="Business_Corporate" className="wow slideInRight" data-wow-duration=".8s" data-wow-delay=".1s"/>
                            <div className="product-share product-share-style-two">
                                <div className="rating">
                                <div className="number">4.8</div>
                                <div className="stars-group">
                                    <div className="star">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star-half-stroke" />
                                    </div>
                                </div>
                                </div>
                                <div className="profile-share">
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <img src="assets/images/about/4.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <img src="assets/images/about/5.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <img src="assets/images/about/6.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <img src="assets/images/about/7.png" alt="education" />
                                </Link>
                                </div>
                            </div>
                            <div className="banner-tag">
                                <div className="inner">
                                <div className="icon bg-color-secondary radius-circle mr--20">
                                    <i className="fa-regular fa-check" />
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                    Save up to 50% in
                                    <br />
                                    Yearly plan.
                                    </h3>
                                    <Link className="btn-learn-more" href="#">
                                    Learn More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-circle">
                    <img src="assets/images/banner/banner-circle.png" alt="banner" />
                    </div>
                    <div className="bg-dolour">
                    <img src="assets/images/banner/banner-dolour.png" alt="banner" />
                    </div>
                    <div className="bg-blue-circle">
                    <img src="assets/images/banner/blue-circle.png" alt="banner" />
                    </div>
                    <div className="bg-curly-lines">
                    <img src="assets/images/banner/curly-lines.png" alt="banner" />
                    </div>
                </div>
                {/* End banner area  */}


        </div>
    )
}

export default BannerTwo