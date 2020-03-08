import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash_container';
import PetIndexContainer from './pets/pet_index_container';
import PetShowContainer from './pets/pet_show_container';
import Footer from './footer/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <Switch> 
        
            <ProtectedRoute path='/pets/:id' component={PetShowContainer} />
            <ProtectedRoute path='/pets' component={PetIndexContainer} />
            <Route path='/' component={Splash}/>
        </Switch>
        <Footer />
    </div>
);

export default App;