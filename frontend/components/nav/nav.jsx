import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {

    const nav = () => (

        <header className='nav' data-position="fixed" data-tap-toggle="false">
                <Link className='nav-left' to='/'>
                    SeniorPetFinderLogo
                </Link>
            {!currentUser ? 
            (
                <nav className='nav-right'>
                    <button className='nav-buttons' onClick={() => openModal('LOG IN')}>LOGIN</button>
                    |
                    <button className='nav-buttons' onClick={() => openModal('SIGN UP')}>SIGNUP</button>
                </nav>
            ) : (
                <div>
                    <Link to='/' className='nav-icons'>
                        <i className="fas fa-home fa-4x"></i>
                    </Link>
                    <Link to='/' className='nav-icons'>
                        <i className="fas fa-dog fa-4x"></i>
                    </Link>

                    <Link to='/' className='nav-icons'>
                        <i className="fas fa-user-circle fa-4x"></i>
                    </Link>
                </div>
            )}
        </header>

    );

    const greeting = () => (

        <hgroup className="loggedin-header">
            <div>READY TO ADOPT, {currentUser.username}?</div>
            <button className="basic-link" onClick={logout}>LOG OUT</button>
        </hgroup>
    );

    return (
        <div>
            {nav()}
            {currentUser ? greeting(currentUser, logout) : ''}
        </div>
    );
}

export default Nav;