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
    console.log(userObj)
    return {
        type: SIGNUP_PENDING,
        payload: {
            request: {
                method: 'GET',
                url: `/buildings`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
                // data: userObj
            },
        },
    };
}