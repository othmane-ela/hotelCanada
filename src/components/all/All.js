import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function All() {
    return (
        <>
            <div className="all mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/chambre'>
                            <div className="magic-card text-center">
                                        <img src="/images/chambre_single/IMG_0338.jpg" alt="Chambre single" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Chambre</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="/images/suite/IMG_0361.jpg" alt="Suite" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Suite</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="/images/entrance_et_restaurant/9.jpg" alt="Restaurant" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Restaurant</h4>
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

export default All
