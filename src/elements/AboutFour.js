import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function AboutFour() {

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

        {/* Tpm About Area Start  */}
        <div className="about-area tmp-section-gapBottom about-style-one">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="about-thumbnails">
                    <div className="thumbnail">
                    <img src="assets/images/about/01.png" alt="corporate_business" />
                    <div className="image-two">
                        <img
                        src="assets/images/about/03.png"
                        alt="corporate_business"
                        />
                    </div>
                    <div className="image-three animated">
                        <img
                        className=""
                        src="assets/images/about/02.png"
                        alt="corporate_business"
                        />
                    </div>
                    <div className="square" />
                    <div className="flower">
                        <img
                        src="assets/images/about/flower.png"
                        alt="Corporate_Business"
                        />
                    </div>
                    <div className="product-share">
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
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/4.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/5.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/6.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/7.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                    {/* video icon */}
                    <div className="vedio-icone" data-tmp-cursor="lg" data-tmp-cursor-text="Play Video">
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
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-inner">
                    <div className="section-head text-align-left section-head-one-side">
                    <div className="section-sub-title">
                        <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                        />
                        <span className="subtitle">ABOUT US</span>
                    </div>
                    <h2 className="title split-collab">
                        Find out more about our <br /> business consulting
                    </h2>
                    </div>
                    <p
                    className="description"
                    data-sal-delay={200}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                    sed, consequat tellus. Quisque ac odio eget ligula gravida
                    efficitur. Nunc facilisis sagittis magna, non venenatis mauris
                    luctus quis.
                    </p>
                    {/* Prograss bar Start  */}
                    <div
                    className="single-progress-area progress-stye-one"
                    data-sal-delay={250}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="progress-top">
                        <p className="name">Consulting Service</p>
                        <span className="parcent">85%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        />
                    </div>
                    </div>
                    <div
                    className="single-progress-area progress-stye-one"
                    data-sal-delay={300}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="progress-top">
                        <p className="name">Finance Consulting</p>
                        <span className="parcent">66%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        />
                    </div>
                    </div>
                    {/* Prograss bar End  */}
                    <div
                    className="thumbnail-with-title"
                    data-sal-delay={350}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="thumbnail">
                        <img src="assets/images/about/about-with-icon.png" alt="" />
                        <div className="icon">
                        <i className="fa-regular fa-dollar-sign" />
                        </div>
                    </div>
                    <div className="title">
                        Helping you run a more efficient &amp; profitable business.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/*Tpm About Area End  */}

    </div>
  )
}

export default AboutFour