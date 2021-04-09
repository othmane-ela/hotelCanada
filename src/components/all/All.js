import React from 'react'
import { Link } from 'react-router-dom'
import './All.css'

function All() {
    return (
        <>
            <div className="all">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4">
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="images/restau-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Restaurant</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4">
                            <Link to='/room'>
                            <div className="magic-card text-center">
                                        <img src="images/room-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Room</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="images/suite-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Other page</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="images/suite-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Other page</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="images/suite-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Other page</h4>
                                        </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4">
                            <Link to='/suite'>
                            <div className="magic-card text-center">
                                        <img src="images/suite-bg.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Other page</h4>
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
