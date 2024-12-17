import React from 'react'

function WhychooseUs() {
  return (
    <div>

        <>
            {/* Start Work Area  */}
            <div className="work-area work-style-one tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="work-top-inner">
                    <div className="section-head pb-0 section-head-one-side text-align-left">
                        <div className="section-sub-title color-white ">
                        <span className="subtitle">WHY CHOOSE US</span>
                        </div>
                        <h2 className="title color-white split-collab">
                        We working for you to build <br /> your business fast
                        </h2>
                    </div>
                    <div
                        className="single-work-top"
                        data-sal-delay={250}
                        data-sal="slide-up"
                        data-sal-duration={800}
                    >
                        <h2 className="title">4M +</h2>
                        <div className="sub-title">Business Using Stripe</div>
                    </div>
                    <div className="scater-line">
                        <img src="assets/images/work/shape.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div
                    className="col-lg-6 col-md-6"
                    data-sal-delay={150}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="inner">
                        <a href="#">
                        <div className="thumbnail">
                            <img
                            className="large"
                            src="assets/images/work/work-1.jpg"
                            alt="Business Consulting"
                            />
                        </div>
                        </a>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-6"
                    data-sal-delay={250}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="single-work style-one mt--35">
                        <a href="#">
                        <div className="work-inner">
                            <div className="thumbnail">
                            <img
                                src="assets/images/work/consultation.png"
                                alt="Business Consulting"
                            />
                            </div>
                            <h3 className="title">Business Consulting</h3>
                            <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam.
                            </p>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-12"
                    data-sal-delay={350}
                    data-sal="slide-up"
                    data-sal-duration={800}
                    >
                    <div className="single-work style-one">
                        <a href="#" className="cart-box cart-box-1">
                        <div className="work-inner">
                            <div className="thumbnail">
                            <img
                                src="assets/images/work/consultation.png"
                                alt="Business Consulting"
                            />
                            </div>
                            <h3 className="title">Strategic Planning</h3>
                        </div>
                        </a>
                    </div>
                    <div className="single-work style-one mt--30">
                        <a href="#">
                        <div className="work-inner">
                            <div className="thumbnail">
                            <img
                                src="assets/images/work/consultation.png"
                                alt="Business Consulting"
                            />
                            </div>
                            <h3 className="title">IT Management</h3>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Work Area  */}
        </>

    </div>
  )
}

export default WhychooseUs