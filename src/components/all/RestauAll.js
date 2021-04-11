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
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="images/restau/130978218_2902789096622540_4395664072423925143_n.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Restaurant</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="images/restau/145843652_2940831256151657_2997176019783491108_n.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Restaurant</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="images/restau/168516784_2982151755352940_7008292584395548666_n.jpg" alt="room" className="magic-card__image"/>
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

export default RestauAll
