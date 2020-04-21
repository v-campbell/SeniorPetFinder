import { fetchPets, fetchPet, addAdoptToPet, removeAdoptFromPet, fetchUserPets } from '../util/pet_util';

export const RECEIVE_PETS = 'RECEIVE_PETS';
export const RECEIVE_PET = 'RECEIVE_PET';
export const CLEAR_PET_ERRORS = 'CLEAR_PET_ERRORS';
export const RECEIVE_USER_PETS = 'RECEIVE_USER_PETS';



export const receivePets = pets => ({
    type: RECEIVE_PETS,
    pets
})

export const receivePet = pet => {
    return ({
        type: RECEIVE_PET,
        pet
    })
}

export const clearErrors = () => ({
    type: CLEAR_PET_ERRORS
});

export const receiveUserPets = (payload) =>({
    type: RECEIVE_USER_PETS,
    payload
})

export const getPets = (maxId) => dispatch => fetchPets(maxId)
    .then(pets => dispatch(receivePets(pets)));

export const getPet = id => dispatch => fetchPet(id)
    .then(pet => dispatch(receivePet(pet)));

    
export const adoptPet = id => dispatch => addAdoptToPet(id)
.then(pet => dispatch(receivePet(pet)))
.catch(err => {console.log(err)})

export const unadoptPet = id => dispatch => removeAdoptFromPet(id)
.then(pet => dispatch(receivePet(pet)));

export const getUserPets = id => dispatch => fetchUserPets(id)
.then(pets => dispatch(receiveUserPets(pets)));


    
    // export const favoritePet = id => dispatch => addFavoriteToPet(id)
    //     .then(pet => dispatch(receivePet(pet)));
    
    // export const unfavoritePet = id => dispatch => removeFavoriteFromPet(id)
    //     .then(pet => dispatch(receivePet(pet)));
    // window.getPet = getPet;