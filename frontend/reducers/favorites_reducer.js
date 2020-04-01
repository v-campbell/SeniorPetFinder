// import {
//     RECEIVE_ALL_FAVORITES,
//     RECEIVE_FAVORITE,
//     RECEIVE_FAVORITED_PET,
//     REMOVE_FAVORITE,
// } from '../actions/favorite_actions';
// import { merge } from 'lodash';

// const favoritesReducer = (prevState = {}, action) => {
//     Object.freeze(prevState);
//     let newState = {};
//     switch (action.type) {
//         case RECEIVE_ALL_FAVORITES:
//             newState = merge({}, prevState, action.favorites);
//             return newState;
//         case RECEIVE_FAVORITE:
//             newState = merge({}, prevState);
//             newState[action.favorite.id] = action.favorite;
//             return newState;
//         case RECEIVE_FAVORITED_PET:
//             debugger
//             return Object.assign({}, prevState, { [action.pet.id]: action.pet });
//         case REMOVE_FAVORITE:
//             newState = merge({}, prevState);
//             delete newState[action.favorite.id];
//             return newState;
//         default:
//             return prevState;
//     }
// };

// export default favoritesReducer;

import { merge } from "lodash";
import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FAVORITES:
            return Object.assign(action.favorites)
        case RECEIVE_FAVORITE:
            // return merge({}, state, action.favorite)
            return Object.assign({}, state, action.favorite)
        case REMOVE_FAVORITE:
            const favorites = Object.assign({}, state)
            delete favorites[action.favoriteId]
            return favorites
        default:
            return state;
    }
}

export default favoritesReducer;


