import React from 'react';


const Splash = ({ currentUser }) => {

    const loggedOutHome = () => (
        <div> 
            <h1 className='splash-text'>
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
                        SOMETHINGSOMETHINGSOMETHING
                    </div>  
                    {/* make into a link to Russell's show page */}
                    <i className="fas fa-arrow-right"></i> 
                </div>
            </div>
       
            <div className='splash-display'>
                <h1>CHECK THESE BABIES OUT</h1>
                <div className='dogGrid'>
                    <div>dog1</div>
                    <div>dog2</div>
                    <div>dog3</div>
                    <div>dog4</div>
                    <div>dog5</div>
                    <div>dog6</div>
                    <div>dog7</div>
                    <div>dog8</div>
                    <div>dog9</div>
                </div>
            </div>
        </div>
    )
        
    console.log(currentUser)
    return( 
        <div>   
            {currentUser ? loggedInHome() : loggedOutHome()};
        </div>
    )
}

export default Splash;