import React from 'react';
import Display from '../display/display';
import { Link } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';

class PetShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getPet(this.props.match.params.id);
        window.scrollTo(0, 0);
    }



    render() {
        // let favoriteButtonText = <i class="far fa-star"></i>;
        // let favoriteButtonAction = () => favoritePet(pet.id);
        // if (pet.favorited_by_current_user) {
        //     favoriteButtonText = <i class="fas fa-star"></i>;
        //     favoriteButtonAction = () => unfavoritePet(pet.id);
        // }
        const {pet} = this.props;
        // const {favoritePet} = this.props;
        // const {unfavoritePet} = this.props;

        if (!pet) return null;
        if (!pet.photoUrls) return null;
        return(
            <div className='pet-show'>
                <div className='pet-show-top'>
                    <div className='pet-show-banner'>
                        <li>⊷ NAME: {pet.name}</li>
                        <li>⊷ BREED: {pet.breed}</li>
                        <li>⊷ AGE: {pet.age}</li>
                        <li>⊷ SEX: {pet.sex}</li>
                        <li>⊷ SIZE: {pet.size}</li>                
                    </div>
                    <div className='pet-show-links'>
                        {/* <Link to='/pets' className='pet-show-back-link'>BACK TO ALL PETS</Link> */}
                        {/* <Link to='/pets' className='pet-show-back-link'>MAYBE ANOTHER</Link>
                        <Link to='/pets' className='pet-show-back-link'>OR ANOTHER</Link> */}   
                    </div>
                    <div className='pet-show-top-content'>
                        <div className='pet-show-top-left'>
                            <div className='pet-show-name'>Hi, I'm {pet.name}</div>
                            <div className='pet-show-about'>{pet.about}</div>
                            {/* <div className='adopt-section'> */}
                                {/* <i className="fas fa-grip-lines fa-4x"></i> */}
                                <button onClick={() => this.props.openModal('ADOPT')}>ADOPT</button>
                                {/* <button onClick={() => this.props.adoptPet(pet.id)}>adopt</button> */}
                            {/* </div> */}
                        </div>
                        {/* <button onClick={favoriteButtonAction}>{favoriteButtonText}</button> */ }
                        <div className='pet-show-images'>
                            <Display photoUrls={pet.photoUrls} />
                            {/* <img className='show-img-1' src={window.tennisURL} width='100%' /> */}
                        </div>
                    </div>
                </div>


                <div className='pet-show-bottom'>
                    <div className='pet-show-grid'>
                        <div className='pet-show-grid-item'>
                            ADOPTION
                            <br />
                            CENTER
                            <br />
                            INFO
                            </div>
                        <div className='pet-show-grid-item'>

                        </div>
                        <div className='pet-show-grid-item'>
                            <div className='name'>
                                <h3>NAME</h3>
                                <i className="fas fa-link"></i>
                                <a href='https://www.sfspca.org/'>  San Francisco SPCA</a>
                            </div>
                            <br />
                            <br />
                            <div className='location'>
                                <h3>LOCATION</h3>
                                <i className="fas fa-link"></i>
                                <a href='https://www.google.ca/maps/place/San+Francisco+SPCA+Mission+Adoption+Center/@37.7663229,-122.4140744,17z/data=!4m13!1m7!3m6!1s0x808f7e2f94fa547d:0x27106e681320893a!2s250+Florida+St,+San+Francisco,+CA+94103!3b1!8m2!3d37.7663229!4d-122.4118857!3m4!1s0x808f7e2feb2eb90d:0x563b21c0032c4942!8m2!3d37.7663229!4d-122.4118856'>  250 Florida Street, San Francisco, CA 94103</a>
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className='pet-show-grid-item'>
                            <div className='fees'>
                                <h3>FEES</h3>
                                <li><i className="fas fa-dog"></i> $175* for adult dogs</li>
                                <li><i className="fas fa-cat"></i> No fee for senior cats!</li>
                                <br />
                                <li>The Life of Riley Fund encourages people over 65 to easily adopt animals from the SF SPCA by underwriting adoption fees for seniors.</li>
                            </div>
                        </div>
                        <div className='pet-show-grid-item'>
                            <div className='hours'>
                                <h3>OPERATING HOURS</h3>
                                <div>
                                    <div>MON TUES</div>
                                    <div>CLOSED</div>
                                    <br />
                                    <div>WED THUR FRI</div>
                                    <div>1PM - 6PM</div>
                                    <br />
                                    <div>SAT SUN</div>
                                    <div>10AM - 5PM</div>
                                </div>
                            </div>
                        </div>
                        <div className='pet-show-grid-item'>
                            <div className='contact'>
                                <h3>CONTACT</h3>
                                <i className="fas fa-mobile-alt"></i>  415.522.3500
                                    <br />
                                <br />
                                <i className="far fa-envelope"></i>  <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=adoptions@sfspca.org?subject=Interested%20in%20adopting%20${pet.name}&body=Hello!%20I%20am%20interested%20in%20adopting%20${pet.name}.%20What%20are%20my%20next%20steps?%20Thank%20you%20in%20advance%20for%20your%20time.%0A%0ABest%20regards,%0A%0AYour%20Name%20Here`}>adoptions@sfspca.org</a>
                                <br />
                                <br />
                                <br />
                                <li>*Additional $23 San Francisco License Fee for SF Residents</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
 
export default PetShow;