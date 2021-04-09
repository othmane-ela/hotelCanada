import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        if(window.innerWidth <= 768)
        {
            setActive(!isActive);
        }
      
      };
    return (
        <>
        <nav>
            <div className="hamburger"  onClick={toggleClass}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="flex-nav-container">
                <div className="logo d-block">
                    <img src="logo.png" className="logo" alt="hotel canada inn logo" width="40%"/>
                </div>
                <ul  className={isActive ? 'nav-links open': 'nav-links'}  >
                    <li className={isActive ? 'fade': null} ><Link to='/' className="text-capitalize" onClick={toggleClass}>accueil</Link></li>
                    <li className={isActive ? 'fade': null} ><Link to='/room' className="text-capitalize" onClick={toggleClass}>room</Link></li>
                    <li className={isActive ? 'fade': null}> <Link to='/suite' className="text-capitalize" onClick={toggleClass}>suite</Link></li>
                    <li className={isActive ? 'fade': null} ><Link to='/restaurant' className="text-capitalize" onClick={toggleClass}>restaurant</Link></li>
                    <li className={isActive ? 'fade': null} ><Link to='/contact' className="text-capitalize" onClick={toggleClass}>contact</Link></li>
                </ul>
             </div>
        </nav>
        </>
    )
}
export default Navbar
