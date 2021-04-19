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
                            <Link to='/doubleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_double/3K9C0081.jpg" alt="Chambre Double" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/doubleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_double/3K9C0095.jpg" alt="Chambre Double" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/doubleGallery'>
                            <div className="magic-card text-center">
                                        <img src="images/chambre_double/IMG_0278.jpg" alt="Chambre Double" className="magic-card__image"/>
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
