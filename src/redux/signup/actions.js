import { LOGIN_PENDING, LOGIN_ERROR, LOGIN_SUCCESS, SIGNUP_PENDING, SIGNUP_ERROR, SIGNUP_SUCCESS, } from './types';

export const sendUserLogin = (userObj) => {
    return {
        types: [LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR],
        payload: {
            request: {
                method: 'POST',
                url: `/signin`,
                data: userObj
            },
        },
    };
}

export const sendUserInfo = (userObj) => {
    delete userObj.password2
    return {
        types: [SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_ERROR],
        payload: {
            request: {
                method: 'POST',
                url: `/users`,
                data: userObj
            },
        },
    };
}