import axios from 'axios';
import { SIGNUP_PENDING, SIGNUP_ERROR, SIGNUP_SUCCESS, } from './types';

const baseUrl = `http://localhost:8080`;

export const userPending = () => ({
    type: SIGNUP_PENDING
})

export const userError = (err) => ({
    type: SIGNUP_ERROR
})

export const userSuccess = (data) => {
    console.log(data)
    return ({
        type: SIGNUP_SUCCESS,
        data: data
    })
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