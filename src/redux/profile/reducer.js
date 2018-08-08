import initialState from '../state';
import { GET_PROFILE } from './types';

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PROFILE:
        return state;

    default:
        return state;
    }
};

export default profileReducer;