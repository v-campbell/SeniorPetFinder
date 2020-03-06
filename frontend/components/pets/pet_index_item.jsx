import React from 'react';

export default ({ pet, favoritePet, unfavoritePet }) => {
    let favoriteButtonText = '♡';
    let favoriteButtonAction = () => favoritePet(pet.id);
    if (pet.favorited_by_current_user) {
        favoriteButtonText = '♥';
        favoriteButtonAction = () => unfavoritePet(pet.id);
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
            <button onClick={favoriteButtonAction}>{favoriteButtonText}</button>
        </div>
    );
}

