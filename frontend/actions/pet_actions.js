import { getPets, getPet, addFavoriteToPet, removeFavoriteFromPet } from '../util/pet_util';

export const RECEIVE_PETS = 'RECEIVE_PET';
export const RECEIVE_PET = 'RECEIVE_PETS';

const receivePets = pets => ({
    type: RECEIVE_PET,
    pets
})

const receivePet = pet => ({
    type: RECEIVE_PET,
    pet
})

export const fetchPets = () => dispatch => getPets()
    .then(pets => dispatch(receivePets(pets)));

export const fetchPet = id => dispatch => getPet(id)
    .then(pet => dispatch(receivePet(pet)));

export const favoritePet = id => dispatch => addFavoriteToPet(id)
    .then(pet => dispatch(receivePet(pet)));

export const unfavoritePet = id => dispatch => removeFavoriteFromPet(id)
    .then(pet => dispatch(receivePet(pet)));