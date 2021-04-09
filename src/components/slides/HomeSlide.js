import React from 'react'
import './Slide.css'
function HomeSlide() {
    return (
        <>
            <div className="slide" style={{ background: "linear-gradient(rgb(27 27 27), rgb(0 0 0 / 48%)), url(images/hotelcanada-bg.jpg)" ,
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'bottom',
            backgroundSize: 'cover'
            }}>
            <div className="container">
                <h1 className="text-center slide-title">Hotel Canada <span>inn</span></h1>
                <p></p>
            </div>
            </div>
        </>
    )
}

export default HomeSlide
