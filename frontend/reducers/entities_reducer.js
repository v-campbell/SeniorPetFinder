import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import petsReducer from './pets_reducer';
import favoritesReducer from './favorites_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    pets: petsReducer,
    favorites: favoritesReducer
});

export default entitiesReducer;