import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';



function LargeVideo() {
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
        


        <>
            {/* Start faq area  */}
            <div className="faq-area faq-style-two faq-bg-image-2 bg_image tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="faq-inner">
                        <div className="faq-content">
                        {/* video icon */}
                        <div className="vedio-icone">
                            <Link className="video-play-button play-video" href="#" onClick={(e) => {
                                e.preventDefault();
                                openVideo();
                                }}>
                                <span />
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
                        <div className="title">Get solutions for Business</div>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End faq area  */}
            {/* faq area start */}
            <div className="tmp-faq-area-three">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-faq wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".4s">
                            <div className="shape-image">
                            <img src="assets/images/faq/03.png" alt="business_faq" />
                            </div>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                    <img src="assets/images/faq/faq-img-2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-7 pl--50 pl_sm--15">
                                    
                                    <div className="faq-accordion faq-accordion-style-two">
                                        <Accordion defaultActiveKey="0">
                                            <div className="section-head text-align-left mb--30">
                                                <span className="subtitle color-gradiant">QUESTIONS &amp; ANSWERS</span>
                                                <h2 className="title split-collab">Frequency asked questions?</h2>
                                            </div>

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>Why is collaborative learning so important</span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                        </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>Do you offer free trials</span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>
                                                            Can I share my courses with non-registered users
                                                        </span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* faq area end */}

        </>

    </div>
  )
}

export default LargeVideo