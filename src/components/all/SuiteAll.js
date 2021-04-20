import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function SuiteAll() {
    return (
        <>
     
            <div className="all  mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-6 mb-4">
                            <Link to='/suite/junior/gallery'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0484.jpg" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Suite Junior</h4>
                                    </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-6 mb-4">
                            <Link to='/suite/royal/gallery'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0480.jpg" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Suite Royal</h4>
                                    </div>
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
