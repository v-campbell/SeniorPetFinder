import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import favoritesErrorsReducer from "./favorites_error_reducer";

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    favorites: favoritesErrorsReducer
})

export default errorsReducer;