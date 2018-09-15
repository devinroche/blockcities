import { TOGGLE_SEARCH, UPDATE_BUILDINGS, TOGGLE_PROFILE_SEARCH, UPDATE_PROFILE_SEARCH} from './types';
import initialState from '../state';

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_SEARCH:
        return {
            ...state,
            showSearch: !state.showSearch,
        };

      case TOGGLE_PROFILE_SEARCH:
        return {
          ...state,
          showProfileSearch: !state.showProfileSearch,
      };

      case UPDATE_PROFILE_SEARCH: {
        return {
          ...state,
          profileSearchStr: action.searchStr,
        }
      }
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
