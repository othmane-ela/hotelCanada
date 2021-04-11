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
                 <Route path={process.env.PUBLIC_URL + "/"} exact component={HomeSlide}/>     
                 <Route path={process.env.PUBLIC_URL +"/room"} exact component={RoomSlide} />
                 <Route path={process.env.PUBLIC_URL +"/suite"} exact component={SuiteSlide} />
                 <Route path={process.env.PUBLIC_URL +"/restaurant"} exact component={RestaurantSlide} />
                 <Route path={process.env.PUBLIC_URL +"/contact"} exact component={Contact} />
                 <Route path={process.env.PUBLIC_URL +"*"}>
                    <NoMatch />
                </Route>
             </Switch>
        </Router>
        </>
    )
}
export default App

