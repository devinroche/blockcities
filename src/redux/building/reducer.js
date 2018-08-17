import { BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR, CURR_BUILDING } from './types';
import initialState from '../state';

const buildingReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUILDINGS_SUCCESS:
            const buildings = action.payload.data.filter(el => el.ImageURL != '')
            return {
                ...state,
                buildingList: buildings,
            }

        case CURR_BUILDING:
            return {
                ...state,
                currentBuilding: action.data
            }

        default:
            return {...state}
    }
}

export default buildingReducer