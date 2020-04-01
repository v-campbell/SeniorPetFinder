import React from 'react';
import AdoptedPets from '../display/adopted_pets_container';
import MyFavoritesContainer from "./favorites_container";

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='user-show'>
                {/* <div>Your Adopted Dogs!</div> */}
                <div className='user-services-box'>
                    <h1>Thank you for using Senior Pet Finder!</h1>
                    <hr />
                    <div className='user-services'>
                        <div className='user-services-pets'>
                            {/* <img src={window.oldLogoURL} width='50px' height='50px' /> */}
                            <i className="fas fa-dog fa-3x"></i>
                            <br />
                            <br />
                            {/* <Link to={`/pets`} className='banner-link'>
                                <label htmlFor='checkbox' className='all-pets-banner'>↓ SEE ALL PETS ↓</label>
                            </Link>
                            <input id="checkbox" type="checkbox" /> */}
                            {/* <ul className="all-pets-grid">
                            </ul> */}
                            VIEW ALL ADOPTED PETS
                            {/* <a href="#link1">Take me to Link 1</a> */}

                        </div>
                        <div className='user-services-favorites'>
                            <img src={window.pawHeartURL} width='50px' height='50px' />
                            <br />
                            <br />
                            VIEW ALL FAVORITED PETS
                            (coming soon!)
                            {/* <div className={3 === this.state.selectedBtn ? "is-selected" : ""}
                                onClick={this.buttonSelected(3)} >
                                <Link to="/my/favorites"><span>My Saved Pets</span></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='adopted-pets'>
                    {/* <a id="gotofav">HERE</a> */}
                    {/* <a id="link1">Link 1</a> */}
                    <h1>ADOPTED PETS</h1>
                    <AdoptedPets />
                </div>
                <div className='adopted-pets'>
                    {/* <a id="gotofav">HERE</a> */}
                    {/* <a id="link1">Link 1</a> */}
                    <h1>FAVORITED PETS</h1>
                    <MyFavoritesContainer />
                </div>
            </div>
        )
    }
}

export default UserShow;