import React, { useEffect }  from 'react';
import WOW from "wowjs";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; 


function BannerEight() {
    useEffect(() => {
        const wow = new WOW.WOW({
          live: false, // This disables continuous scanning for new elements
        });
        wow.init();
    }, []);
  return (
    
    <div>
        
        {/* tmp banner area */}
        <section className="section-banner-area-start tmp-section-gapTop pt_sm--10 pb--40">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-xl-1 order-md-2 order-sm-2 order-2 pl_md--30 pl_sm--30">
                <div className="banner-company-area-main__wrapper">
                    <span className="pre-title wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">Our Corporate Business Agency</span>
                    <h1 className="title wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">Bizper Company.</h1>
                    <p className="wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    quis. Ullam accusantium dignissimos repellendus nemo fugiat
                    numquam, nisi odio adipisci. Veniam neque itaque expedita officiis
                    rem ipsa! Ratione, rem reiciendis?
                    </p>
                    <div className="button-area-wrapper">
                    <Link
                        to={'#'}
                        className="tmp-btn btn-primary wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s"
                    >
                        Purchase Now
                    </Link>
                    <Link to={'/Contact'} className="tmp-btn btn-primary wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".4s">
                        Contact Us
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 order-xl-2 order-md-1 order-sm-1 order-1 mb_md--30 mb_sm--30">
 
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="frame-image-about-company"
                        speed={1000}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        effect="fade"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
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
                        <div className="frame-image-about-company">
                            <img src="assets/images/about/about-3.png" alt="Banner Images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="frame-image-about-company">
                            <img src="assets/images/about/about-4.png" alt="Banner Images" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="frame-image-about-company">
                            <img src="assets/images/about/about-6.png" alt="Banner Images" />
                        </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </div>
            </div>
        </section>

    </div>
  )
}

export default BannerEight