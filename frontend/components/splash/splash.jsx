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
            <img className='pirate' src={window.pirateURL} />
            <div className='splash-text'>
                Meet Russell ;〕
                <div className='splash-subtext'>
                    SOMETHINGSOMETHINGSOMETHING
                </div>  
                {/* make into a link to Russell's show page */}
                <i className="fas fa-arrow-right"></i> 
            </div>
       
            <div>
                <h1>CHECK THESE BABIES OUT</h1>
                <div className='dogGrid'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
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