import React from "react";
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to='/' className='header-link'>
                <h1 className="navText">WELCOME TO SENIOR PET FINDER</h1>
            </Link>
            <NavContainer />
        </header>

        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;