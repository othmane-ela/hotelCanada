import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';

import './Slide.css'
function HomeSlide() {
    return (
        <>
           
            <div className="slide" style={{ background: "linear-gradient(rgb(27 27 27), rgb(0 0 0 / 48%)), url(images/hotelcanada-bg.jpg)" ,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
            }}>
            <FadeIn>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div  className="slide-title">
                                <h1>Hotel Canada <span>inn</span></h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                            </div>
                        </div>
                      
                        <div className="col-md-2">
                              <Link to='/room'>
                                <div className="next-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-right next-slide-icon" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div>
                              </Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
            </div>
           
        </>
    )
}

export default HomeSlide
