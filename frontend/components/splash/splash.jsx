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
                            Stay awake thinking about the fact that your parents are getting older and happiness is temporary, just like everything else
                        </div>
                        <div className='services-adopt'>
                            <img src={window.handHoldURL} width='50px' height='50px' />
                            <br />
                            <br />
                            Adopt a senior pet(s) and welcome them into their forever home!
                        </div>
                    </div>
                </div>

                <div className='splash-display'>
                        <h1>CHECK THESE BABIES OUT</h1>
                        <PetIndexContainer />
                            {/* {this.props.pets.slice(6).map(pet =>
                            <PetIndexItem
                                key={`pet${pet.id}`}
                                pet={pet}
                                id={pet.id}
                                photoUrls={pet.photoUrls}
                            // favoritePet={this.props.favoritePet}
                            // unfavoritePet={this.props.unfavoritePet} 
                            />
                            )} */}
                </div>
        </div>
    )
}

export default Splash;