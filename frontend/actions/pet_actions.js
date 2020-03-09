import { fetchPets, fetchPet, addFavoriteToPet, removeFavoriteFromPet, addAdoptToPet } from '../util/pet_util';

export const RECEIVE_PETS = 'RECEIVE_PET';
export const RECEIVE_PET = 'RECEIVE_PETS';

const receivePets = pets => ({
    type: RECEIVE_PETS,
    pets
})

const receivePet = pet => ({
    type: RECEIVE_PET,
    pet
})

export const getPets = () => dispatch => fetchPets()
    .then(pets => dispatch(receivePets(pets)));

export const getPet = id => dispatch => fetchPet(id)
    .then(pet => dispatch(receivePet(pet)));

export const favoritePet = id => dispatch => addFavoriteToPet(id)
    .then(pet => dispatch(receivePet(pet)));

export const unfavoritePet = id => dispatch => removeFavoriteFromPet(id)
    .then(pet => dispatch(receivePet(pet)));

export const adoptPet = id => dispatch => addAdoptToPet(id)
    .then(pet => dispatch(receivePet(pet)));

// window.getPet = getPet;