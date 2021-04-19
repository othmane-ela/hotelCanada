import React from 'react'
import './Gallery.css'
import Carousel from "react-multi-carousel";

function Contact() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1395 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1395, min: 900 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1
        }
      };


    return (
        <>
            <div className="Gallery">
                <div className="container">
                <div className="row text-light">
                    <div className="col-md-12 text-center text-light title">
                             <img src="logo.png" className="d-block mx-auto my-3" alt="hotel brand" width="10%"/>
                            <h2 >restaurant Gallery</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-12 mt-5">
                    <Carousel responsive={responsive}>
                        <div>
                          <img src="images/entrance_et_restaurant/17.jpg" alt="restaurant" className="magic-card__image rounded"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/9.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/10.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/11.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/12.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/13.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/14.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>

                        <div>
                          <img src="images/entrance_et_restaurant/15.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/18.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/19.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="images/entrance_et_restaurant/20.jpg" alt="restaurant" className="magic-card__image"/>
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
             
            </div>
        </>
    )
}

export default Contact
