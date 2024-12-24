import React, { useEffect, useState } from "react";
import HeaderOne from "../header/HeaderOne";
import Contact from "../inner/breadcrumb/Contact";
import Footer from "../elements/Footer";
import axios from "axios";

function ContactPage() {
  const [contacts, setContacts] = useState();
  useEffect(() => {
    const fetchCategory = async () => {
      const response2 = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/business-setup`
      );
      setContacts(response2?.data);
    };
    fetchCategory();
  }, []);

  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contact, setContact] = useState(INITIAL_STATE);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/contacts`;
      const { name, email, phone, message } = contact;
      const payload = { full_name: name, email, phone, message };
      await axios.post(url, payload);
      setContact(INITIAL_STATE);
      setPending(false);
      setErrors({
        full_name: "",
        email: "",
        message: "",
      });
      setMessage("Email Sent successfully.");
    } catch (error) {
      setMessage("Failed unable to send the email, Please try again!");
      setPending(false);
      setErrors({
        full_name: error?.response?.data?.errors?.full_name[0] || "",
        email: error?.response?.data?.errors?.email[0] || "",
        message: error?.response?.data?.errors?.message[0] || "",
      });
    }
  };

  return (
    <div className="service-details contact-page">
      <div className="">
        <HeaderOne />
        <main>
          <Contact />
          {/* tmp contact area */}
          <div className="contact-area tmp-section-gap">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-5">
                  <div className="contact-inner">
                    <div className="section-head section-head-one-side text-align-left">
                      <span className="title">Contact Us</span>
                      <p className="description">
                        Reach out to us for all your questions, feedback, and
                        collaborations!
                      </p>
                    </div>
                    <ul className="ft-link ft-link-style-three">
                      <li>
                        <div className="single-contact background-transparent">
                          <div className="icon">
                            <i className="fa-light fa-phone" />
                          </div>
                          <div className="content">
                            <span>Call Us</span>
                            <a
                              className="contact-here"
                              href={`tel:${contacts?.phone1}`}
                            >
                              {contacts?.phone1}
                            </a>
                            <br />
                            <a
                              className="contact-here"
                              href={`tel:${contacts?.phone2}`}
                            >
                              {contacts?.phone2}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact background-transparent">
                          <div className="icon">
                            <i className="fa-solid fa-envelope-open-text" />
                          </div>
                          <div className="content">
                            <span>E-mail</span>
                            <a
                              className="contact-here"
                              href={`mailto:${contacts?.email1}`}
                            >
                              {contacts?.email1}
                            </a>
                            <br />
                            <a
                              className="contact-here"
                              href={`mailto:${contacts?.email2}`}
                            >
                              {contacts?.email2}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-contact background-transparent">
                          <div className="icon">
                            <i className="fa-regular fa-map-location-dot" />
                          </div>
                          <div className="content">
                            <span>Address</span>
                            <a className="contact-here" href="#">
                              {contacts?.address}
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="tmp-tag-list tag-list-one">
                      <a className="tag-list" href={contacts?.facebookLink}>
                        Facebook
                      </a>
                      <a className="tag-list" href={contacts?.twitterLink}>
                        Twitter
                      </a>
                      <a className="tag-list" href={contacts?.linkedInLink}>
                        Linkedin
                      </a>
                      <a className="tag-list" href={contacts?.telegramLink}>
                        Telegram
                      </a>
                      <a className="tag-list" href={contacts?.whatsUpLink}>
                        Whatsapp
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-inner">
                    <div className="section-head section-head-one-side text-align-left">
                      <span className="title">GET IN TOUCH</span>
                      <p className="description">
                        Get in touch with us for inquiries, orders, or
                        support—we're here to help!
                      </p>
                    </div>
                    <div className="contact-form style-two">
                      <div id="form-messages" />
                      <form id="contact-form" onSubmit={onSubmit}>
                        <p
                          style={{
                            color: message?.startsWith("Failed")
                              ? "red"
                              : "green",
                          }}
                        >
                          {message}
                        </p>
                        <div className="contact-form-wrapper row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="name"
                                placeholder="Name"
                                id="contact-name"
                                type="text"
                                value={contact?.name}
                                onChange={handleChange}
                                required
                              />
                              <p
                                style={{ color: "red" }}
                                className="form_error"
                              >
                                {errors?.full_name}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="phone"
                                placeholder="Phone"
                                type="text"
                                value={contact.phone}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={contact?.email}
                                onChange={handleChange}
                                required
                              />
                              <p
                                style={{ color: "red" }}
                                className="form_error"
                              >
                                {errors?.email}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="subject"
                                placeholder="Subject"
                                type="text"
                                value={contact?.subject}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                className="input-field"
                                name="message"
                                placeholder="How can we help"
                                value={contact?.message}
                                onChange={handleChange}
                                required
                                id="contact-message"
                              />
                              <p
                                style={{ color: "red" }}
                                className="form_errord"
                              >
                                {errors?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-submit-group">
                              <button
                                className="tmp-btn btn-primary"
                                type="submit"
                              >
                                {pending ? "Submitting..." : "Submit Now"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* tmp contact area */}
          <div className="tmp-map-area tmp-sectiongapBottom">
            <div className="map-area-flotimg-container">
              <iframe
                src={contacts?.gmapUrl}
                width={600}
                height={650}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ContactPage;
