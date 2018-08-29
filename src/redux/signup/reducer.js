import {
    LOGIN_SUCCESS, SIGNUP_PENDING, SIGNUP_ERROR, SIGNUP_SUCCESS,
} from './types';
import initialState from '../state';

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_SUCCESS:
        return {
            ...state,
            user: action.payload.data,
            loadApp: true,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            user: action.payload.data,
            loadApp: true,
        };

    default:
        return { ...state };
    }
};

export default signupReducer;
