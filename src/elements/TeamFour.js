import React from 'react'
import sal from 'sal.js';
import { Link } from 'react-router-dom';
function TeamFour() {
    React.useEffect(() => {
        sal({
          threshold: 1,
          once: true,
        });
    }, []);
  return (
        <>
            {/* Start team area  */}
            <div className="team-area tmp-section-gap bg-white">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="section-head">
                        <div className="section-sub-title center-title">
                        <img
                            src="assets/images/services/section-custom-menubar.png "
                            alt="Corporate services"
                        />
                        <span>OUR EXPERT TEAM</span>
                        </div>
                        <h2 className="section-title split-collab">Meet Our Expert Team</h2>
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="single-team">
                        <Link
                        to={'/TeamDetails'}
                        className="thumbnail"
                        data-tmp-cursor="lg transparent fw-bold"
                        data-tmp-cursor-text="View Details"
                        >
                        <img src="assets/images/team/team-2.png" alt="Corporate team" />
                        </Link>
                        <div className="content">
                        <div className="team-name content-with-bg">
                            <Link href="#" className="name-area">
                            <h6 className="name">Clade Owen</h6>
                            </Link>
                            <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                            <ul className="social-icons social-icons-with-bg">
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-twitter" />
                                </Link>
                            </li>
                            </ul>
                            <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".2s">
                    <div className="single-team">
                        <Link
                        to={'/TeamDetails'}
                        className="thumbnail"
                        data-tmp-cursor="lg transparent fw-bold"
                        data-tmp-cursor-text="View Details"
                        >
                        <img src="assets/images/team/team-3.png" alt="Corporate team" />
                        </Link>
                        <div className="content">
                        <div className="team-name content-with-bg">
                            <Link href="#" className="name-area">
                            <h6 className="name">John Lee</h6>
                            </Link>
                            <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                            <ul className="social-icons social-icons-with-bg">
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-twitter" />
                                </Link>
                            </li>
                            </ul>
                            <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="single-team">
                        <Link
                        to={'/TeamDetails'}
                        className="thumbnail"
                        data-tmp-cursor="lg transparent fw-bold"
                        data-tmp-cursor-text="View Details"
                        >
                        <img src="assets/images/team/team-5.png" alt="Corporate team" />
                        </Link>
                        <div className="content">
                        <div className="team-name content-with-bg">
                            <Link href="#" className="name-area">
                            <h6 className="name">William John</h6>
                            </Link>
                            <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                            <ul className="social-icons social-icons-with-bg">
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-twitter" />
                                </Link>
                            </li>
                            </ul>
                            <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".4s">
                    <div className="single-team">
                        <Link
                        to={'/TeamDetails'}
                        className="thumbnail"
                        data-tmp-cursor="lg transparent fw-bold"
                        data-tmp-cursor-text="View Details"
                        >
                        <img src="assets/images/team/team-1.png" alt="Corporate team" />
                        </Link>
                        <div className="content">
                        <div className="team-name content-with-bg">
                            <Link href="#" className="name-area">
                            <h6 className="name">William John</h6>
                            </Link>
                            <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                            <ul className="social-icons social-icons-with-bg">
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                <i className="fa-brands fa-twitter" />
                                </Link>
                            </li>
                            </ul>
                            <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End team area  */}
        </>

  )
}

export default TeamFour