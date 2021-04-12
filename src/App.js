import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/* COMPONNENTS AND PAGES */
import NoMatch from "./NoMatch"
import Navbar from './components/navbar/Navbar'
import HomeSlide from "./components/pages/Home"
import RoomSlide from "./components/pages/Room"
import SuiteSlide from "./components/pages/Suite"
import RestaurantSlide from "./components/pages/Restaurant"
import Contact from "./components/contact/Contact"
/* GLOBAL STYLE*/
import './App.css'

function App(props) {
    return (
        <>
        <Router>
             <Navbar/>
             <Switch>
                 <Route path="/hotelCanada" exact component={HomeSlide}/>     
                 <Route path="/hotelCanada/room" exact component={RoomSlide} />
                 <Route path="/hotelCanada/suite" exact component={SuiteSlide} />
                 <Route path="/hotelCanada/restaurant" exact component={RestaurantSlide} />
                 <Route path="/hotelCanada/contact" exact component={Contact} />
                 <Route path="*">
                    <NoMatch />
                </Route>
             </Switch>
        </Router>
        </>
    )
}
export default App

