import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function SuiteAll() {
    return (
        <>
     
            <div className="all  mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/suiteGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0501.JPG" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/suiteGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0455.JPG" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/suiteGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0493.JPG" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default SuiteAll
