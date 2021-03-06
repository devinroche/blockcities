import {
    BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR, CURR_BUILDING, HEADER_COLOR, TOGGLE_IMG_MODAL
} from './types';

export const getBuildings = () => ({
    types: [BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR],
    payload: {
        request: {
            method: 'GET',
            url: '/buildings',
        },
    },
});

export const showBuildingImg = () => ({
  type: TOGGLE_IMG_MODAL
})

export const currentBuilding = building => ({
    type: CURR_BUILDING,
    data: building,
});

export const toggleHeaderColor = boolVal => ({
  type: HEADER_COLOR,
  isGrey: boolVal
})