import { TOGGLE_SEARCH, UPDATE_BUILDINGS, TOGGLE_FILTERS, TOGGLE_PROFILE_SEARCH, UPDATE_PROFILE_SEARCH, UPDATE_MARKET_SEARCH } from './types';

export const toggleSearch = () => ({
    type: TOGGLE_SEARCH,
});

export const toggleFilters = () => ({
  type: TOGGLE_FILTERS,
});

export const toggleProfileSearch = () => ({
  type: TOGGLE_PROFILE_SEARCH,
});

export const updateMarketSearch = (searchStr) => ({
  type: UPDATE_MARKET_SEARCH,
  marketSearchStr: searchStr
})

export const updateProfileSearch = (searchStr) => ({
  type: UPDATE_PROFILE_SEARCH,
  searchStr: searchStr
});

export const filteredBuildings = (data) => {
    data = data.filter(el => el.image_url != '');
    return {
        type: UPDATE_BUILDINGS,
        data,
    };
};
