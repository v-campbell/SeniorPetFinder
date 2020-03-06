import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash_container';
import PetIndexContainer from './pets/pet_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <Splash />
        <ProtectedRoute path="/pets" component={PetIndexContainer} />
    </div>
);

export default App;