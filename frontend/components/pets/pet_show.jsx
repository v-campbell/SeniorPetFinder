import React from 'react';
import { Link } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';

class PetShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getPet(this.props.match.params.id)
    }

    render() {
        // let favoriteButtonText = '♡';
        // let favoriteButtonAction = () => favoritePet(pet.id);
        // if (pet.favorited_by_current_user) {
        //     favoriteButtonText = '♥';
        //     favoriteButtonAction = () => unfavoritePet(pet.id);
        // }
        const {pet} = this.props;
        // const {favoritePet} = this.props;
        // const {unfavoritePet} = this.props;

        if (!pet) return null;
        return(
            <div className='pet-show'>
                <div className='pet-show-left'>
                    <div className='pet-show-top'>
                        <Link to='/pets' className='pet-show-links'>BACK TO ALL PETS</Link>
                        <div className='pet-show-header'>
                            <div className='pet-show-header-desc'>
                                <div>{pet.name}</div>
                                <div>
                                    {/* <div>ABOUT</div> */}
                                    <br/>
                                    {/* ﹌ */}
                                    <div>{pet.about}</div>
                                    <i className="fas fa-grip-lines fa-3x"></i>

                                </div>
                            </div>
                        </div>
                        {/* <img src=`url_for(${pet.photo}) alt=""/> */}
                        {/* <button onClick={favoriteButtonAction}>{favoriteButtonText}</button> */ }
                        <div className='pet-show-list'>
                            <li>⊷ BREED: {pet.breed}</li>
                            <li>⊷ AGE: {pet.age}</li>
                            <li>⊷ SEX: {pet.sex}</li>
                            <li>⊷ SIZE: {pet.size}</li>                
                        </div>
                    </div>

                    <div className='pet-show-bottom'>

                        <div className='pet-show-grid'>
                            <div className='pet-show-grid-item'>   
                                ADOPTION CENTER
                                <br/> 
                                INFO
                            </div>
                            <div className='pet-show-grid-item'>
                                <div className='hours'>
                                    <h3>OPERATING HOURS</h3>
                                    <div>
                                        <div>MON TUES</div>
                                        <div>CLOSED</div>
                                        <br/>
                                        <div>WED THUR FRI</div>
                                        <div>1PM - 6PM</div>
                                        <br />
                                        <div>SAT SUN</div>
                                        <div>10AM - 5PM</div>
                                    </div>
                                </div>
                            </div>
                            <div className='pet-show-grid-item'>
                                <div className='location'>
                                    <h3>LOCATION</h3>
                                    <i className="fas fa-link"></i>
                                      
                                    <a href='https://www.google.ca/maps/place/San+Francisco+SPCA+Mission+Adoption+Center/@37.7663229,-122.4140744,17z/data=!4m13!1m7!3m6!1s0x808f7e2f94fa547d:0x27106e681320893a!2s250+Florida+St,+San+Francisco,+CA+94103!3b1!8m2!3d37.7663229!4d-122.4118857!3m4!1s0x808f7e2feb2eb90d:0x563b21c0032c4942!8m2!3d37.7663229!4d-122.4118856'>  250 Florida Street, San Francisco, CA 94103</a>
                                </div>
                            </div>
                            <div className='pet-show-grid-item'>
                                <div className='fees'>
                                    <h3>FEES</h3>
                                    <li><i className="fas fa-dog"></i> $175* for adult dogs</li>
                                    <li><i className="fas fa-cat"></i> No fee for senior cats!</li>
                                    <br/>
                                    <li>The Life of Riley Fund encourages people over 65 to easily adopt animals from the SF SPCA by underwriting adoption fees for seniors.</li>
                                    <br />
                                    <li>*Additional $23 San Francisco License Fee for SF Residents</li>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='pet-show-images'>
                    <img className='show-img-1' src={window.tennisURL} width='100%' />
                    <img className='show-img-2' src={window.tennisURL} width='100%'/>
                    {/* <img className='show-img-3' src={window.tennisURL} width='100%'/> */}
                </div>

            </div>
        );
    }

}
 
export default PetShow;