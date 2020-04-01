// import { addFavoriteToPet, removeFavoriteFromPet, fetchAllFavoritedPets } from '../util/favorite_api_util';
// // import { receivePet } from '../actions/pet_actions';
// export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES"
// export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE"
// export const RECEIVE_FAVORITED_PET = "RECEIVE_FAVORITED_PET"
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

// export const receiveAllFavorites = (favorites) => ({
//     type: RECEIVE_ALL_FAVORITES,
//     favorites
// });

// export const receiveFavorite = (favorite) => ({
//     type: RECEIVE_FAVORITE,
//     favorite
// });

// export const receiveFavoritedPet = (pet) => ({
//     type: RECEIVE_FAVORITED_PET,
//     pet
// });

// export const removeFavorite = (favorite) => ({
//     type: REMOVE_FAVORITE,
//     favorite
// });

// export const fetchAllFavorites = () => dispatch => fetchAllFavoritedPets()
//         .then(favorites => dispatch(receiveAllFavorites(favorites)))

// export const favoritePet = petId => dispatch => addFavoriteToPet(petId)
//     .then(pet => dispatch(receiveFavoritedPet(pet)));

// export const unfavoritePet = petId => dispatch => removeFavoriteFromPet(petId)
//     .then(pet => dispatch(receiveFavoritedPet(pet)));

import * as APIUtil from "../util/favorites_util";

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS"

const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
});

const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
});

const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
});

const receiveFavoriteErrors = errors => ({
    type: RECEIVE_FAVORITE_ERRORS,
    errors
});

export const requestFavorites = (userId) => dispatch => {
    return APIUtil.fetchFavorites(userId).then(
        (favorites) => dispatch(receiveFavorites(favorites))
    );
};

export const createFavorite = (formData, userId) => dispatch => {
    return APIUtil.createFavorite(formData, userId).then(
        (favorite) => {
            dispatch(receiveFavorite(favorite))
        },
        (err) => {
            dispatch(receiveFavoriteErrors(err.responseJSON))
        }
    );
};

export const deleteFavorite = (userId, favoriteId) => dispatch => {
    return APIUtil.deleteFavorite(userId, favoriteId).then(
        () => dispatch(removeFavorite(favoriteId)),
        (err) => dispatch(receiveFavoriteErrors(err.responseJSON))
    );
};