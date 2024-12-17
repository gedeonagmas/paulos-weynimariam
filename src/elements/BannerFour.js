import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BannerFour() {
    
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
        
        {/* tmp banner area start */}
        <div className="tmp-section-gap tmp-banner__agency-wrapper-bg position-relative bg_image">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="banner-inner-content-four">
                    <div className="inner-content-banner-four">
                    {/* video icon */}
                    <div className="vedio-icone wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        <Link className="video-play-button play-video" href="#" onClick={(e) => {
                            e.preventDefault();
                            openVideo();
                            }}>
                            <span />
                            <p className="text">Play Video</p>
                        </Link>
                        
                        {isOpen && (
                            <div className="video-overlay open" onClick={closeVideo}>
                            <iframe
                                width="560"
                                height="515"
                                src="https://www.youtube.com/embed/8NJWZpC51Tg?si=Wu_uoN3F0HADlEQp"
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
                    <div className="content-wrapper">
                        <h1 className="title wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                        We Design &amp; Build <br /> <span> Powerfull Website</span>{" "}
                        </h1>
                        <p className="disc wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                        Design Better Website With Bizper HTML Template
                        </p>
                        <div className="button-area-banner-one wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".7s">
                        <Link to={'/Service'} className="tmp-btn btn-primary">
                            <i className="fa-light fa-users" /> Get In Touch With Us
                        </Link>
                        {/* video icon */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="tmp-ocean">
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
            </div>
            </div>
        </div>
        {/* tmp banner area end */}

    </div>
  )
}

export default BannerFour