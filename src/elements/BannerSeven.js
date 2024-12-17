import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';


function BannerSeven() {

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
        <div className="tmp-banner-swiper-one-area construction-2">
            <div className="swiper mySwiper-banner-one-construction">
            <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                    className="banner-style-five"
                    speed={500}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    effect='fade'
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1200: { slidesPerView: 1 },
                        900: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        580: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    >
                    <SwiperSlide>
                        <div className="tmp-banner-area bg_image-1 bg_image banner-one-height-control construction-2 tmp-section-gap">
                            <div className="shape-image-banner-one">
                            <img
                                src="assets/images/banner/shape/01.png"
                                alt="banner"
                                className="one"
                            />
                            <img
                                src="assets/images/banner/shape/02.png"
                                alt="banner"
                                className="two"
                            />
                            <img
                                src="assets/images/banner/shape/03.png"
                                alt="banner"
                                className="three"
                            />
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="banner-one-main-wrapper">
                                    <div className="inner">
                                    <span className="sub-title">
                                        Business Consulting Agency
                                    </span>
                                    <h1 className="title">
                                        Transforming Ideas into Structures
                                    </h1>
                                    <p className="disc">
                                        We help small startups grow from idea to millions of
                                        users. we can also <br />
                                        automate your marketing and customer service.
                                    </p>
                                    <div className="button-area-banner-one">
                                        <Link to={'/Service'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                        {/* video icon */}
                                        <div className="vedio-icone" data-tmp-cursor="lg" data-tmp-cursor-text="Play Video">
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
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tmp-banner-area bg_image-2 bg_image banner-one-height-control construction-2 tmp-section-gap">
                            <div className="shape-image-banner-one">
                            <img
                                src="assets/images/banner/shape/01.png"
                                alt="banner"
                                className="one"
                            />
                            <img
                                src="assets/images/banner/shape/02.png"
                                alt="banner"
                                className="two"
                            />
                            <img
                                src="assets/images/banner/shape/03.png"
                                alt="banner"
                                className="three"
                            />
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="banner-one-main-wrapper">
                                    <div className="inner">
                                    <span className="sub-title">
                                        Business Consulting Agency
                                    </span>
                                    <h1 className="title">Redefining Urban Landscapes</h1>
                                    <p className="disc">
                                        We help small startups grow from idea to millions of
                                        users. we can also <br />
                                        automate your marketing and customer service.
                                    </p>
                                    <div className="button-area-banner-one">
                                        <Link to={'/Service'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                        {/* video icon */}
                                        <div className="vedio-icone" data-tmp-cursor="lg" data-tmp-cursor-text="Play Video">
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
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="tmp-banner-area bg_image-3 bg_image banner-one-height-control construction-2 tmp-section-gap">
                        <div className="shape-image-banner-one">
                        <img
                            src="assets/images/banner/shape/01.png"
                            alt="banner"
                            className="one"
                        />
                        <img
                            src="assets/images/banner/shape/02.png"
                            alt="banner"
                            className="two"
                        />
                        <img
                            src="assets/images/banner/shape/03.png"
                            alt="banner"
                            className="three"
                        />
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="banner-one-main-wrapper">
                                <div className="inner">
                                <span className="sub-title">
                                    Business Consulting Agency
                                </span>
                                <h1 className="title">From Concept to Construction</h1>
                                <p className="disc">
                                    We help small startups grow from idea to millions of
                                    users. we can also <br />
                                    automate your marketing and customer service.
                                </p>
                                <div className="button-area-banner-one">
                                    <Link to={'/Service'} className="tmp-btn btn-primary">
                                    Get Started Now
                                    </Link>
                                    {/* video icon */}
                                    <div className="vedio-icone" data-tmp-cursor="lg" data-tmp-cursor-text="Play Video">
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
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </div>


    </div>
  )
}

export default BannerSeven