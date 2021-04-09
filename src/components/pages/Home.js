import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';
import Carousel from "react-multi-carousel";
import About from "../about/About"
import All from "../all/All"
import Contact from "../contact/Contact"


import "react-multi-carousel/lib/styles.css";
import './Pages.css'


function HomeSlide() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 900 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };
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
            <div className="container-fix">
          
              <div className="row pt-5">
                  <div className="col-md-4 text-center py-4 left-side-text">
                    <h4 className="text-light">
                        Hotel <b>Canada inn</b>
                    </h4>
                    <p className="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                  </div>
                   <div className="col-md-8 bottom-slide py-4">
                    <Carousel responsive={responsive}>
                    <div>
                    <Link to='/room'>
                        <div className="magic-card text-center">
                                    <img src="images/room-bg.jpg" alt="room" className="magic-card__image"/>
                                    <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Room</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    </div>
                        </div>
                    </Link>
                    </div>
                    <div>
                    <Link to='/suite'>
                        <div className="magic-card text-center">
                                    <img src="images/suite-bg.jpg" alt="room" className="magic-card__image"/>
                                    <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Suite</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    </div>
                        </div>
                    </Link>
                    </div>
                    <div>
                    <Link to='/restaurant'>
                        <div className="magic-card text-center">
                                    <img src="images/restau-bg.jpg" alt="room" className="magic-card__image"/>
                                    <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Restaurant</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    </div>
                        </div>
                    </Link>
                    </div>
                    <div>
                    <Link to='/contact'>
                        <div className="magic-card text-center">
                                    <img src="images/room-bg.jpg" alt="room" className="magic-card__image"/>
                                    <div className="black-overlay"></div>
                                        <div className="magic-card__text-no-wrapper">
                                            <h4 className="magic-card__title">Contact</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                    </div>
                        </div>
                    </Link>
                    </div>
                    </Carousel>
                </div>
                </div>
               
            </div>

            <About></About>
            <All></All>
            <Contact></Contact>

            </div>

        

        </>
    )
}

export default HomeSlide
