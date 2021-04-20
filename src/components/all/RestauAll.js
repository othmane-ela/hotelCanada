import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function RestauAll() {
    return (
        <>
            <div className="all mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant/gallery'>
                            <div className="magic-card text-center">
                                        <img src="images/entrance_et_restaurant/15.jpg" alt="Restaurant" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant/gallery'>
                            <div className="magic-card text-center">
                                        <img src="images/entrance_et_restaurant/11.jpg" alt="Restaurant" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant/gallery'>
                            <div className="magic-card text-center">
                                        <img src="images/entrance_et_restaurant/14.jpg" alt="Restaurant" className="magic-card__image"/>
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

export default RestauAll
