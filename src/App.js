import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

/* COMPONNENTS AND PAGES */
import NoMatch from "./NoMatch"
import Navbar from './components/navbar/Navbar'

import HomeSlide from "./components/pages/Home"

//import SingleSlide from "./components/pages/Single"
//import DoubleSlide from "./components/pages/Double"
import ChambreSlide from "./components/pages/Chambre"

import SingleGallery from "./components/gallery/chambre/singleGallery"
import DoubleGallery from "./components/gallery/chambre/doubleGallery"
import TripleGallery from "./components/gallery/chambre/tripleGallery"




import SuiteSlide from "./components/pages/Suite"
import suiteJuniorGallery from "./components/gallery/suite/suiteJuniorGallery"
import suiteRoyalGallery from "./components/gallery/suite/suiteRoyalGallery"



import RestaurantSlide from "./components/pages/Restaurant"
import restaurantGallery from "./components/gallery/restaurant/restaurantGallery";


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
                 <Route path="/chambre" exact component={ChambreSlide} />    
                 <Route path="/suite" exact component={SuiteSlide} />
                 <Route path="/restaurant" exact component={RestaurantSlide} />
                 <Route path="/contact" exact component={Contact} />


                 <Route path="/chambre/single/gallery" exact component={SingleGallery} />
                 <Route path="/chambre/double/gallery" exact component={DoubleGallery} />
                 <Route path="/chambre/triple/gallery" exact component={TripleGallery} />



                 <Route path="/suite/junior/gallery" exact component={suiteJuniorGallery} />
                 <Route path="/suite/royal/gallery" exact component={suiteRoyalGallery} />

                 <Route path="/restaurant/gallery" exact component={restaurantGallery} />

           
                 <Route path="*">
                    <NoMatch />
                </Route>
             </Switch>
        </Router>
        </>
    )
}
export default App

