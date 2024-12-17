import React from 'react'
import { Link } from 'react-router-dom';

function AboutSix() {
  return (
    <div>
        

        <>
        {/* short discription about company area  */}
        <div className="short-discription-area tmp-section-gapBottom">
            <div className="container  plr_sm--15">
            <div className="row">
                <div className="col-lg-12">
                <div className="short-discription-between-area">
                    <h2 className="title wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                    We are a dynamic creative digital agency dedicated to elevating
                    our company's brands.
                    </h2>
                    <div className="discription-area">
                    <p className="disc wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        quis. Ullam accusantium dignissimos repellendus nemo fugiat
                        numquam, nisi odio adipisci. Veniam neque itaque expedita
                        officiis rem ipsa! Ratione, rem reiciendis?
                    </p>
                    <a href="#" className="btn-readmore d-flex wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                        View More
                        <i className="fa-light fa-arrow-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* short discription about company area end */}
        {/* about company wrapper */}
        <section className="about-company-area tmp-section-gapBottom">
            <div className="row align-items-center  plr_sm--15 plr_md--15">
            <div className="col-lg-4 offset-lg-2 mb_md--50 mb_sm--30">
                <div className="split-inner">
                <h2
                    className="title sal-animate mb--40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s" >
                    What is Bizper?
                </h2>
                <p
                    className="description sal-animate mb--25 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                    Randomised words which don't look even slightly believable. If you
                    are to use a passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. in some form, by
                    injectedeed bedhumour, or randomised even.
                </p>
                <p
                    className="description sal-animate wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                    You need to be sure there isn't anything embarrassing hidden in the
                    middle of text. in some form, by injectedeed bedhumour, or
                    randomised even.
                </p>
                <ul
                    className="split-list sal-animate wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".7s">
                    <li>- Doug DeMarco, Design Prototyping Manager</li>
                    <li>- 108 million paying subscribers</li>
                    <li>- Over 1.7 billion hours of music played monthly</li>
                    <li>- 4,000+ employees working across 16 offices</li>
                </ul>
                <div
                    className="view-more-button mt--35 sal-animate d-flex wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".9s">
                    <Link className="tmp-btn btn-primary" to={'/Contact'}>
                    Contact With Us
                    </Link>
                </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-duration=".8s" data-wow-delay=".3s">
                <div className="thumbnail image-right-content">
                <img src="assets/images/about/about-large.jpg" alt="split Images" />
                </div>
            </div>
            </div>
        </section>
        {/* about company wrapper end */}
        </>


    </div>
  )
}

export default AboutSix