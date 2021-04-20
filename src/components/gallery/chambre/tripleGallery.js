import React from 'react'
import '../Gallery.css'
import Carousel from "react-multi-carousel";

function tripleGallery() {

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
                             <img src="/logo.png" className="d-block mx-auto my-3" alt="hotel brand" width="10%"/>
                            <h2 >Chambre Triple Gallery</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-12 mt-5">
                    <Carousel responsive={responsive}>
                        <div>
                          <img src="/images/chambre_single/IMG_0276.jpg" alt="Chambre single" className="magic-card__image rounded"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0336.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0337.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0338.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0339.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0340.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0341.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>

                        <div>
                          <img src="/images/chambre_single/IMG_0279.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0287.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0288.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/chambre_single/IMG_0287.jpg" alt="Chambre single" className="magic-card__image"/>
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
             
            </div>
        </>
    )
}

export default tripleGallery
