import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {

    const nav = () => (

        <div className='nav'>
                <Link className='nav-left' to='/'>
                    〄
                </Link>
            {!currentUser ? 
            (
                <nav className='nav-right-logged-out'>
                    <button className='nav-buttons' onClick={() => openModal('LOG IN')}>LOGIN</button>
                    |
                    <button className='nav-buttons' onClick={() => openModal('SIGN UP')}>SIGNUP</button>
                </nav>
            ) : (
                <>
                {/* <h1 className='welcome-text'>READY TO ADOPT, {currentUser.username}?</h1> */}
                <nav className='nav-right-loggedin'>
                    <Link to='/' className='nav-icons'>
                        {/* <i className="fas fa-home fa-3x"></i> */}
                        <img src={window.homeURL} width='58px' height='58px'/>
                    </Link>
                    
                    <Link to='/' className='nav-icons'>
                        {/* <i className="fas fa-dog fa-3x"></i> */}
                        <img src={window.oldLogoURL} width='50px' height='50px'/>
                    </Link>

                    <div className='nav-user'>
                        <Link to='/' className='nav-icons'>
                            {/* <i className="fas fa-user-circle fa-3x" width='50px' height='50px'></i> */}
                            <img src={window.userURL} width='50px' height='50px'/>
                        </Link>
                        {/* <br/>
                        <Link to='/' className='nav-name'>
                            {currentUser.firstName}
                        </Link> */}
                    </div>
                    <div className='nav-button-loggedin nav-icons' onClick={logout}>LOG OUT</div>
                </nav>
                </>


            )}
        </div>

    );

    return (
        <div>
            {nav()}
        </div>
    );
}

export default Nav;