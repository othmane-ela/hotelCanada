import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';
import Carousel from "react-multi-carousel";

import About from "../about/About"
import All from "../all/All"
import Contact from "../contact/Contact"

function RoomSlide() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1395 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1395, min: 900 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <div className="slide" style={{ background: "linear-gradient(rgb(15, 15, 15), rgb(0 0 0 / 48%)), url(images/room-bg.jpg)" ,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
            }}>
            
            <div className="blur-right d-none d-md-block"></div>
            <FadeIn>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div  className="slide-title">
                                <h2>Room</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .</p>
                            </div>
                        </div>
                        <div className="col-md-2 ">
                              <Link to='/suite'>
                                <div className="next-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-right next-slide-icon" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div>
                              </Link>
                        </div>
                    </div>
                </div>
           
            <div className="container-fuild container-fix">
            <div className="row adjust-bottom-slide">
              <div className="col-md-4 text-center pb-4 left-side-text d-none d-md-block ">


              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door text-light m-2" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wifi text-light m-2" viewBox="0 0 16 16">
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-ppt text-light m-2" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z"/>
                </svg>


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
                                <img src="images/room/3K9C0081.JPG" alt="room" className="magic-card__image"/>
                                <div className="black-overlay"></div>
                                    <div className="magic-card__text-no-wrapper">
                                        <h4 className="magic-card__title">Room</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                </div>
                    </div>
                </Link>
                </div>
                <div>
                <Link to='/room'>
                    <div className="magic-card text-center">
                                <img src="images/room/3K9C0098.JPG" alt="room" className="magic-card__image"/>
                                <div className="black-overlay"></div>
                                    <div className="magic-card__text-no-wrapper">
                                        <h4 className="magic-card__title">Room</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                </div>
                    </div>
                </Link>
                </div>
                <div>
                <Link to='/room'>
                    <div className="magic-card text-center">
                                <img src="images/room/IMG_0276.JPG" alt="room" className="magic-card__image"/>
                                <div className="black-overlay"></div>
                                    <div className="magic-card__text-no-wrapper">
                                        <h4 className="magic-card__title">Room</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                </div>
                    </div>
                </Link>
                </div>
                <div>
                <Link to='/room'>
                    <div className="magic-card text-center">
                                <img src="images/room/IMG_0336.JPG" alt="room" className="magic-card__image"/>
                                <div className="black-overlay"></div>
                                    <div className="magic-card__text-no-wrapper">
                                        <h4 className="magic-card__title">Room</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                </div>
                    </div>
                </Link>
                </div>
                </Carousel>
            </div>
            </div>
            </div>

            </FadeIn>
            <About></About>
            <All></All>
            <Contact></Contact>

            </div>
        </>
    )
}

export default RoomSlide
