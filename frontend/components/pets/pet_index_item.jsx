import React from 'react';
import { Link } from 'react-router-dom';

const PetIndexItem = ({ pet, favoritePet, unfavoritePet }) => {
    // let favoriteButtonText = '♡';
    // let favoriteButtonAction = () => favoritePet(pet.id);
    // if (pet.favorited_by_current_user) {
    //     favoriteButtonText = '♥';
    //     favoriteButtonAction = () => unfavoritePet(pet.id);
    // }

    return (
        <div className='pet-index-item'>
            <div className='pet-index-item-text'>{pet.name}, {pet.age}</div>
            <Link to={`/pets/${pet.id}`}>
                <img src={window.tennisURL} width='100%' height='100%' />
            </Link>
           
        </div>
    );
}

export default PetIndexItem;

