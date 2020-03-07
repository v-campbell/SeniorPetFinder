import React from 'react';

import PetIndexContainer from '../pets/pet_index_container'

const Splash = ({ currentUser }) => {
    const loggedOutHome = () => (
        <div>
            <h1 className='splash-text splash-text-logged-out'>
                Find your new
                <br />
                (old) best friend.
            </h1>
            <img className='gray' src={window.grayURL} />
        </div>
    )

    const loggedInHome = () => (
        <div>
            <div className='splash-greeting'>
                <img className='pirate' src={window.pirateURL} />
                <div className='splash-text'>
                        Meet Russell ;P
                    <div className='splash-subtext'>
                            He only has eye for you.
                    </div>
                        {/* make into a link to Russell's show page */}
                    <br />
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
    return (
        <div>
            {currentUser ? loggedInHome() : loggedOutHome()}

                <div className='splash-display'>
                    <h1>CHECK THESE BABIES OUT</h1>
                    <PetIndexContainer />
                </div>

                <div className='splash-services-box'>
                    <h1>HOW IT WORKS</h1>
                    <hr/>
                    <div className='splash-services'>
                        <div className='services-pets'>
                            {/* <img src={window.oldLogoURL} width='50px' height='50px' /> */}
                            <i className="fas fa-dog fa-3x"></i>
                            <br/>
                            <br/>
                            Browse pets from ages 7+
                        </div>
                        <div className='services-favorites'>
                            <img src={window.pawHeartURL} width='50px' height='50px' />
                            <br />
                            <br />
                            Log in to add good girls and boys to your favorites list 
                        </div>
                        <div className='services-brain'>
                            <i className="fas fa-lightbulb fa-3x"></i>
                            <br />
                            <br />
                            Stay awake thinking about the fact that your parents are getting old and that happiness is temporary, just like everything else
                        </div>
                        <div className='services-adopt'>
                            <img src={window.handHoldURL} width='50px' height='50px' />
                            <br />
                            <br />
                            Adopt a senior pet(s) and welcome them into their forever home!
                        </div>
                    </div>

                </div>
                <div className='splash-footer'>
                    <a href='https://www.linkedin.com/in/victoria-khym-campbell/'>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href='https://github.com/v-campbell/SeniorPetFinder/wiki'>
                        <i class="fab fa-github-square fa-2x"></i>
                    </a>
                </div>
        </div>
    )
}

export default Splash;