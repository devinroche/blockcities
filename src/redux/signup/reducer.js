import {
    LOGIN_SUCCESS, SIGNUP_PENDING, LOGIN_ERROR, SIGNUP_SUCCESS, LOGIN_PENDING
} from './types';
import initialState from '../state';

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
    case SIGNUP_SUCCESS:
        console.log(action.payload)
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
            loginErr: false,
        };

    case LOGIN_ERROR:
        return {
            ...state,
            loginErr: true,
        };
    
    case LOGIN_PENDING:
        return {
            ...state,
            loginErr: false,
        };


    default:
        return { ...state };
    }
};

export default signupReducer;
