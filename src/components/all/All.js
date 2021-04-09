import React from 'react'
import { Link } from 'react-router-dom'
import './All.css'

function All() {
    return (
        <>
            <div className="all">
                <div className="container">
                    <div className="row top">
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
                       <div className="col-md-4 mb-4">
                            <Link to='/room'>
                            <div className="magic-card text-center">
                                        <img src="images/room/3K9C0098.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Room</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="images/suite/IMG_0344.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Suite</h4>
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
