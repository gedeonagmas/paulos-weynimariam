import React from 'react'
import HeaderOne from '../header/HeaderOne';
import Error from '../inner/breadcrumb/Error';
import Footer from '../elements/Footer';
import { Link } from 'react-router-dom';




function ServiceDetails() {
  return (
    <div className='service-details'>
        <div className="">
            <HeaderOne/>
            <main>
                <Error/>
                    {/* tmp breadcrumb area start */}
                    <div className="error-page-area tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="error-inner text-center">
                                <div className="thumbnail">
                                <img src="assets/images/error/group2.png" alt="error" />
                                <img src="assets/images/error/404.png" alt="error" />
                                <img src="assets/images/error/group1.png" alt="error" />
                                </div>
                                <h2 className="title">Oops! Nothing Was Found</h2>
                                <p className="description text-center">
                                Household shameless incommode at no objection behaviour.
                                Especially do at he possession insensible sympathize boisterous
                                it. Songs he on an widen me event truth.
                                </p>
                                <Link to={'/'} className="tmp-btn btn-primary">
                                Back To Home
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp breadcrumb area end */}
                <Footer/>
            </main>
        </div>
    </div>
  )
}

export default ServiceDetails