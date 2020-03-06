import React from 'react';

export default ({ pet, addFavoriteToPet, removeFavoriteFromPet }) => {
    let favoriteButtonText = '♡';
    let favoriteButtonAction = () => addFavoriteToPet(pet.id);
    if (pet.favorited_by_current_user) {
        favoriteButtonText = '♥';
        favoriteButtonAction = () => removeFavoriteFromPet(pet.id);
    }
    
    return (
        <div>
            <div>{pet.name}</div>
            <ul>
                <li>{pet.breed}</li>
                <li>{pet.age}</li>
                <li>{pet.sex}</li>
                <li>{pet.size}</li>
                <li>{pet.about}</li>
             
            </ul>
        </div>
    )
}

