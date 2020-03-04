import React from 'react';
// import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {

    const links = () => (
        <nav className='nav-links'>
            {/* <Link to='/login' className='basic-link'>NAV LOGIN</Link>
            <Link to='/signup' className='basic-link'>NAV SIGN UP</Link> */}
            <button onClick={() => openModal('LOG IN')}>LOGIN</button>
            <button onClick={() => openModal('SIGN UP')}>SIGNUP</button>
        </nav>
    );

    const greeting = () => (
        <hgroup className="header">
            <h2 className="header-name">READY TO ADOPT, {currentUser.username}?</h2>
            <button className="basic-link" onClick={logout}>LOG OUT</button>
        </hgroup>
    );

    return (
        currentUser ? greeting(currentUser, logout) : links()
    );
}

export default Nav;