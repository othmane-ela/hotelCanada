import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';

function RestaurantSlide(props) {
    return (
        <>
            <div className="slide" style={{ background: "linear-gradient(rgb(27 27 27), rgb(0 0 0 / 48%)), url(images/restau-bg.jpg)" ,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
            }}>
                <FadeIn>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div  className="slide-title">
                                <h1>Restaurant</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            
                              <Link to='/'>
                                <div className="next-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left next-slide-icon" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
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
export default RestaurantSlide

