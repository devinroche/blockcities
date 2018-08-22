import { BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR, CURR_BUILDING } from './types';

export const getBuildings = () => {
    return {
        types: [BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR],
        payload: {
            request: {
                method: 'GET',
                url: `/buildings`,
            },
        },
    };
}

export const currentBuilding = (building) => {
    return {
        type: CURR_BUILDING,
        data: building
    }
}