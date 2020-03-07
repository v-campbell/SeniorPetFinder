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
            <div className='splash-display'>
                <h1>CHECK THESE BABIES OUT</h1>
                <PetIndexContainer />
            </div>
        </div>
    )

    const loggedInHome = () => {

        return(
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
       
                {/* {dogList()} */}
            <div className='splash-display'>
                <h1>CHECK THESE BABIES OUT</h1>
                <PetIndexContainer />
            </div>
        </div>
        )
    }
        
    return( 
        <div>   
            {currentUser ? loggedInHome() : loggedOutHome()}
        </div>
    )
}

export default Splash;