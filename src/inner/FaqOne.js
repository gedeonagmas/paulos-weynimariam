import React from 'react'
import HeaderInner from '../header/HeaderInner';
import Faq from './breadcrumb/Faq';
import Footer from '../elements/Footer';
import Accordion from 'react-bootstrap/Accordion';




function OurPricing() {
  return (
    <div>
        <HeaderInner/>
            <Faq/>
            {/* Tmp FAQ area Start  */}
            <div className="faq-area faq-style-one faq-bg-image bg_image tmp-section-gap mt-dec--180">
                <div className="container pt--180">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="0">
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

                            <div className="faq-buttom">
                            <h4 className="title">Still Have More Questions?</h4>
                            <p>
                                Contact Our <a href="#">Expert Support Team</a>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Tmp FAQ area Start  */}
        <Footer/>

    </div>
  )
}

export default OurPricing