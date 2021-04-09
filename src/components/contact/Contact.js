import React from 'react'
import './Contact.css'


function Contact() {
    return (
        <>
            <div className="contact" style={{ backgroundImage: "url()" ,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
            
            }}>
                <div className="container">
                <div className="row text-light">
                    <div className="col-md-12 text-center text-light title">
                              <img src="logo.png" className="d-block mx-auto" alt="hotel brand" width="10%"/>
                            <h2 >Contact</h2>
                            <h3>Hotel <b>Canada</b><b><span>inn</span></b></h3>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h6>Email</h6>
                        <p>contact@hotelcanada.ma</p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h6>Phone</h6>
                        <p>212 (0)5366-13634</p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h6>Adress</h6>
                        <p>Hôtel canada inn Berkane , ma</p>
                    </div>
                    <div className="col-md-12 text-center">
                    <iframe title="map" className=" my-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11002.898742249705!2d-2.3322704854892247!3d34.92698807696445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a19b54605b902e3!2sH%C3%B4tel+canada+inn!5e0!3m2!1sen!2sma!4v1555517651741!5m2!1sen!2sma" width="100%" height="450" frameBorder="0" ></iframe>
                    </div>
                    <div className="col-md-12 text-center">
                        <h6>&copy; HotelCanada.ma {new Date().getFullYear()}</h6>
                    </div>
                </div>
                </div>
             
            </div>
        </>
    )
}

export default Contact
