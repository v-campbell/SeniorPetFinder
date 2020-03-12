import { RECEIVE_PETS, RECEIVE_PET, RECEIVE_USER_PETS } from '../actions/pet_actions';

export default  (oldState = {}, action) => {
    Object.freeze(oldState);
    // const pets = {};
    switch (action.type) {
        case RECEIVE_PETS:
            // return action.pets;
            return Object.assign({}, oldState, action.pets)
        case RECEIVE_PET:
            return Object.assign({}, oldState, { [action.pet.id]: action.pet });
        case RECEIVE_USER_PETS:
            return Object.assign({}, oldState, action.payload.pets)
        default:
            return oldState;
    }
};