import React from 'react'
import '../Gallery.css'
import Carousel from "react-multi-carousel";

function SuiteRoyal() {

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
                            <h2 >Suite Royal Gallery</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="col-md-12 mt-5">
                    <Carousel responsive={responsive}>
                        <div>
                          <img src="/images/suite/IMG_0344.jpg" alt="suite royal" className="magic-card__image rounded"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0350.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0371.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0453.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0455.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0469.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0481.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>

                        <div>
                          <img src="/images/suite/IMG_0483.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0484.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0489.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                        <div>
                          <img src="/images/suite/IMG_0501.jpg" alt="suite royal" className="magic-card__image"/>
                        </div>
                    </Carousel>
                    </div>
                </div>
                </div>
             
            </div>
        </>
    )
}

export default SuiteRoyal
