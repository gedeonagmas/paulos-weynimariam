import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FaqOne() {
  return (
    <div>
      <>
        {/* Tmp FAQ area Start  */}
        <div className="faq-area faq-style-one faq-bg-image bg_image tmp-section-gap mt-dec--180">
          <div className="container pt--180">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-head">
                  <div className="section-sub-title center-title">
                    <img
                      src="assets/images/services/section-custom-menubar.png "
                      alt="Corporate_service"
                    />
                    <span className="subtitle">QUESTION AND ANSWERS</span>
                  </div>
                  <h2 className="title split-collab">
                    Frequency Asked Questions
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img
                    src="assets/images/faq/faq-1.png"
                    alt="Business Consulting FAQ"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-accordion">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="accordion-button-left">
                          <i className="fa-regular fa-question" />
                          <span>
                            What makes Vento unique compared to others?
                          </span>
                        </div>
                        <div className="accordion-button-right">
                          <i className="fa-sharp fa-light fa-arrow-right" />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        Vento is crafted using premium ingredients and a
                        carefully refined brewing process to deliver a smooth,
                        refreshing taste with an unmatched quality standard.
                        Each bottle reflects our dedication to excellence and
                        flavor innovation.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className="accordion-button-left">
                          <i className="fa-regular fa-question" />
                          <span>Where can I purchase Vento products?</span>
                        </div>
                        <div className="accordion-button-right">
                          <i className="fa-sharp fa-light fa-arrow-right" />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        You can find Vento at leading supermarkets, liquor
                        stores, and select restaurants. We’re also available for
                        online purchase through our website and partnered
                        retailers.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <div className="accordion-button-left">
                          <i className="fa-regular fa-question" />
                          <span>Does Vento offer non-alcoholic options?</span>
                        </div>
                        <div className="accordion-button-right">
                          <i className="fa-sharp fa-light fa-arrow-right" />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, we offer a variety of non-alcoholic ventos that
                        retain the same refreshing taste and quality. Perfect
                        for those who want to enjoy the flavor without the
                        alcohol content.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <div className="faq-buttom">
                    <h4 className="title">Still Have More Questions?</h4>
                    <p>
                      Contact Our <a href="/contact">Expert Support Team</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tmp FAQ area Start  */}
      </>
    </div>
  );
}

export default FaqOne;
