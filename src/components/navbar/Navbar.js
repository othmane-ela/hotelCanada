import React,{useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isActive, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);
   
    const toggleClass = () => {
        
        if(window.innerWidth <= 768)
        {
            setActive(!isActive);

        }      
      };

     
      useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 10);
        });
      }, []);
      
    
    return (
        
        <>
        <nav className={scroll ? "fixed-top shadow-lg darkness-nav" : ""}>
            <div className="hamburger"  onClick={toggleClass}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="flex-nav-container">
                <div className="logo d-block">
                    <img src="logo.png" className="logo" alt="hotel canada inn logo" width="38%"/>
                </div>
                <ul  className={isActive ? 'nav-links open': 'nav-links'}  >
                    <li className={isActive ? 'fade ': null}><NavLink exact  to="/" activeClassName="active" onClick={toggleClass}>Accueil</NavLink></li>
                    <li className={isActive ? 'fade ': null}><NavLink exact  to="/room" activeClassName="active" onClick={toggleClass}>Room</NavLink></li>
                    <li className={isActive ? 'fade ': null}><NavLink exact  to="/suite" activeClassName="active" onClick={toggleClass}>Suite</NavLink></li>
                    <li className={isActive ? 'fade ': null}><NavLink exact  to="/restaurant" activeClassName="active" onClick={toggleClass}>Restaurant</NavLink></li>
                    <li className={isActive ? 'fade ': null}><NavLink exact  to="/contact" activeClassName="active" onClick={toggleClass}>Contact</NavLink></li>
                </ul>
             </div>
        </nav>
        </>
    )
}
export default Navbar
