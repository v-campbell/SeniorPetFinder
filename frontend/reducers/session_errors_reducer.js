import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        // to return action's errors
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        // to clear errors
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;