
import React from 'react'

function BreadcrumbSd(props) {
  return (
    <div>
        


        {/* Start Breadcrumb area  */}
        <div className="breadcrumb-area bg_image tmp-section-gap breadcrumb-bg">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                    <h1 className="title split-collab">Team Members</h1>
                    <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="icon">
                        <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Team Members</li>
                    </ul>
                    <div className="circle-1" />
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Breadcrumb area  */}


    </div>
  )
}

export default BreadcrumbSd