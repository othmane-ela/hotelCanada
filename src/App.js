import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/* COMPONNENTS AND PAGES */
import NoMatch from "./NoMatch"
import Navbar from './components/navbar/Navbar'
import HomeSlide from "./components/pages/Home"

import SingleSlide from "./components/pages/Single"
import DoubleSlide from "./components/pages/Double"
import SuiteSlide from "./components/pages/Suite"
import RestaurantSlide from "./components/pages/Restaurant"

import SingleGallery from "./components/gallery/singleGallery"
import DoubleGallery from "./components/gallery/doubleGallery"
import SuiteGallery from "./components/gallery/suiteGallery"
import RestauGallery from "./components/gallery/restaurantGallery"




import Contact from "./components/contact/Contact"
/* GLOBAL STYLE*/
import './App.css'

function App(props) {
    return (
        <>
        <Router basename={process.env.PUBLIC_URL}>
             <Navbar/>
             <Switch>
                 <Route path="/" exact component={HomeSlide}/>     
                 <Route path="/single" exact component={SingleSlide} />
                 <Route path="/double" exact component={DoubleSlide} />
                 <Route path="/suite" exact component={SuiteSlide} />
                 <Route path="/restaurant" exact component={RestaurantSlide} />
                 <Route path="/contact" exact component={Contact} />

                 <Route path="/singleGallery" exact component={SingleGallery} />
                 <Route path="/doubleGallery" exact component={DoubleGallery} />
                 <Route path="/suiteGallery" exact component={SuiteGallery} />
                 <Route path="/restaurantGallery" exact component={RestauGallery} />

           
                 <Route path="*">
                    <NoMatch />
                </Route>
             </Switch>
        </Router>
        </>
    )
}
export default App

