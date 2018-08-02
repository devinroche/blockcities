import { combineReducers } from 'redux';
import initialState from './state';
import { GET_PROFILE } from './types';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PROFILE:
        return state;

    default:
        return state;
    }
};

const rootReducer = combineReducers({
    reducer,
});

export default rootReducer;
