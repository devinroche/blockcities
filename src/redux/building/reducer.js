import {
    BUILDINGS_PENDING, BUILDINGS_SUCCESS, BUILDINGS_ERROR, CURR_BUILDING, HEADER_COLOR
} from './types';
import initialState from '../state';

const buildingReducer = (state = initialState, action) => {
    switch (action.type) {
    case BUILDINGS_SUCCESS:
        return {
            ...state,
            buildingList: action.payload.data,
            userBuildings: randArr(action.payload.data)
        };

    case CURR_BUILDING:
        return {
            ...state,
            currentBuilding: action.data,
        };

      case HEADER_COLOR:
        return {
          ...state,
          isGrey: action.isGrey
        }

    default:
        return { ...state };
    }
};

export default buildingReducer;

const randArr = (buildingArr) => {
  let numEl = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
  const newArr = [];
  while (numEl) {
      newArr.push(buildingArr[Math.floor(Math.random() * buildingArr.length)]);
      numEl--;
  }
  return newArr.filter((e, i) => newArr.indexOf(e) == i);
};