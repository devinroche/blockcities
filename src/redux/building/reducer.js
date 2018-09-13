import {
    BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR, CURR_BUILDING,
} from './types';
import initialState from '../state';

const buildingReducer = (state = initialState, action) => {
    switch (action.type) {
    case BUILDINGS_SUCCESS:
        return {
            ...state,
            buildingList: action.payload.data,
        };

    case CURR_BUILDING:
        return {
            ...state,
            currentBuilding: action.data,
        };

    default:
        return { ...state };
    }
};

export default buildingReducer;

const randColors = [
    '#ffedc1',
    '#f0dddc',
    '#b1cafb',
    '#b9dbf0',
];
