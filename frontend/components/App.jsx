import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import Splash from './splash/splash_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <NavContainer />
        <Splash />

        {/* <header className='header-content' data-position="fixed" data-tap-toggle="false" > */}
        {/* <Link to='/'>
            <div>home</div>
        </Link>  */}
        {/* </header> */}

        {/* <Route to='/' component={NavContainer}/> */}
        {/* Route to / component SplashContainer */}

        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;