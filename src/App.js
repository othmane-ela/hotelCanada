import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/* COMPONNENTS AND PAGES */
import NoMatch from "./NoMatch"
import Navbar from './components/navbar/Navbar'
import HomeSlide from "./components/slides/HomeSlide"
import RoomSlide from "./components/slides/RoomSlide"
import SuiteSlide from "./components/slides/SuiteSlide"
import RestaurantSlide from "./components/slides/RestaurantSlide"


/* GLOBAL STYLE*/
import './App.css'

function App(props) {
    return (
        <>
        <Router>
             <Navbar/>
             <Switch>
                 <Route path="/" exact component={HomeSlide} />
                 <Route path="/room" exact component={RoomSlide} />
                 <Route path="/suite" exact component={SuiteSlide} />
                 <Route path="/restaurant" exact component={RestaurantSlide} />
                 <Route path="*">
                    <NoMatch />
                </Route>
             </Switch>
        </Router>
        </>
    )
}
export default App

