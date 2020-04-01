import React from 'react';
import { Link } from 'react-router-dom';

export default class PetIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = ({
        //     favorited: false || this.props.favorited,
        // })
        // this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    // toggleFavorite() {
    //     const pet = this.props.pet;

    //     if (this.state.favorited) {
    //         this.props.unfavoritePet(pet.id);
    //     } else {
    //         this.props.favoritePet(pet.id);
    //     }
    // }

    // hoverText() {
    //     return(
    //         <div className='hover-text'>
    //             hover over
    //             <div>HOVERED</div>
    //         </div>
    //     )
    // }

    render() {
        const {pet} = this.props;
        if (!pet.photoUrls) return null;

        let favoriteButtonText = <i className="far fa-heart fa-1x"></i>;
        let favoriteButtonAction = () => this.props.favoritePet(pet.id);
        if (pet.favorited_by_current_user) {
            favoriteButtonText = <i className="fas fa-heart"></i>;
            favoriteButtonAction = () => this.props.unfavoritePet(pet.id);
        }
        return (
            
            <div className='pet-index-item gradient'>
                <Link to={`/pets/${pet.id}`} className='pet-index-item-link'>
                    <div className='pet-index-image-container'>
                        <img src={this.props.pet.photoUrls[0]} className='pet-index-image'/>
                    </div>
                </Link>
                <div className='pet-index-item-text-1'>
                    <div>
                        <Link to={`/pets/${pet.id}`} className='pet-index-item-link'>
                            {pet.name}
                        </Link>
                    </div>
                    <div className='pet-index-item-text-2'>
                        <p>Age:  {pet.age}</p>  
                        <p>Sex:  {pet.sex}</p>  
                    </div>
                    {/* <i className="far fa-heart fa-1x"></i> */}
                    {/* <i className="fas fa-heart fa-3x"></i> */}
                    {/* <button onClick={favoriteButtonAction}>{favoriteButtonText}</button> */}

            </div>

            </div>
        )
    }
}

