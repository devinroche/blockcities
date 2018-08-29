import { TOGGLE_SEARCH, UPDATE_BUILDINGS } from './types';
import initialState from '../state';

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_SEARCH:
        return {
            ...state,
            showSearch: !state.showSearch,
        };

    case UPDATE_BUILDINGS:
        return {
            ...state,
            data: action.data,
        };

    default:
        return { ...state };
    }
};

export default searchReducer;
