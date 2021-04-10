import React from 'react'
import { Link } from 'react-router-dom'
import './All.css'

function RoomAll() {
    return (
        <>
            <div className="all">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/restaurant'>
                            <div className="magic-card text-center">
                                        <img src="images/room/3K9C0081.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Room</h4>
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
                                        <img src="images/room/IMG_0276.jpg" alt="room" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                            <div className="magic-card__text-no-wrapper">
                                                <h4 className="magic-card__title">Room</h4>
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

export default RoomAll
