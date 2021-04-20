import React from 'react'
import { Link } from 'react-router-dom'

import './All.css'

function ChambreAll() {
    return (
        <>
            <div className="all  mb-4">
                <div className="container">
                    <div className="row top">
                       <div className="col-md-4 mb-4">
                            <Link to='/chambre/single/gallery'>
                            <div className="magic-card text-center">
                                        <img src="/images/chambre_double/3K9C0081.jpg" alt="Chambre Single" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Chambre Single</h4>
                                    </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/chambre/double/gallery'>
                            <div className="magic-card text-center">
                                        <img src="/images/chambre_double/3K9C0095.jpg" alt="Chambre Double" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Chambre Double</h4>
                                    </div>
                            </div>
                            </Link>
                       </div>
                       <div className="col-md-4 mb-4">
                            <Link to='/chambre/triple/gallery'>
                            <div className="magic-card text-center">
                                        <img src="/images/chambre_double/IMG_0064.jpg" alt="Chambre Triple" className="magic-card__image"/>
                                        <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Chambre Triple</h4>
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

export default ChambreAll
