import React from 'react'
import CounterUp from './CounterGlobal';
function FaqTwo() {
  return (
    <div>
        
        {/* Start Counter area  */}
        <div className="history-area history-style-one counter-history-bg-image bg_image tmp-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="section-head color-white style-two">
                        <div className="section-sub-title color-white  center-title">
                        <span>OUR History</span>
                        </div>
                        <h2 className="title color-white split-collab">
                        Bizper is partnered with 10k+ fastest <br />
                        growing companies from 2008
                        </h2>
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="history-inner style-one">
                        <div className="custom-icon">
                        <img src="assets/images/counter/01.png" alt="" />
                        </div>
                        <div className="counter-wrapper">
                        <div className="single-counter">
                            <CounterUp className="number" end={89}/>
                            <h3 className="title">SATISFAID CLIENTS</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="history-inner style-one">
                        <div className="custom-icon">
                        <img src="assets/images/counter/02.png" alt="" />
                        </div>
                        <div className="counter-wrapper">
                        <div className="single-counter">
                            <CounterUp className="number" end={55}/>
                            <h3 className="title">COUNTRIES WORLDWIDE</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".5s">
                    <div className="history-inner style-one">
                        <div className="custom-icon">
                        <img src="assets/images/counter/03.png" alt="" />
                        </div>
                        <div className="counter-wrapper">
                        <div className="single-counter">
                            <CounterUp className="number" end={789}/>
                            <h3 className="title">INTERNATIONAL AWARDS</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".7s">
                    <div className="history-inner style-one">
                        <div className="custom-icon">
                        <img src="assets/images/counter/04.png" alt="" />
                        </div>
                        <div className="counter-wrapper">
                        <div className="single-counter">
                            <CounterUp className="number" end={1560}/>
                            <h3 className="title">EXPERT STAFFS</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Counter area  */}

    </div>
  )
}

export default FaqTwo