import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import petsReducer from './pets_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pets: petsReducer
});

export default entitiesReducer;