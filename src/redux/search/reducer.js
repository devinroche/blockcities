import { TOGGLE_SEARCH, UPDATE_BUILDINGS, TOGGLE_PROFILE_SEARCH, TOGGLE_FILTERS, UPDATE_PROFILE_SEARCH, UPDATE_MARKET_SEARCH} from './types';
import initialState from '../state';

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_SEARCH:
        return {
            ...state,
            showSearch: !state.showSearch,
        };

      case TOGGLE_FILTERS:
        return {
          ...state,
          showFilters: !state.showFilters
        }

      case UPDATE_MARKET_SEARCH:
        return {
          ...state,
          marketSearchStr: action.marketSearchStr,
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
