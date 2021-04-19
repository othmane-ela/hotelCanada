import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function RoomAll() {
    return (
        <>
            <div className="all  mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/singleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_single/IMG_0337.jpg" alt="Chambre Single" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/singleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_single/IMG_0338.jpg" alt="Chambre Single" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/singleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_single/IMG_0325.jpg" alt="Chambre Single" className="magic-card__image"/>
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

export default RoomAll
