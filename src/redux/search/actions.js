import { TOGGLE_SEARCH, UPDATE_BUILDINGS } from './types';

export const toggleSearch = () => ({
    type: TOGGLE_SEARCH,
});

export const filteredBuildings = (data) => {
    data = data.filter(el => el.image_url != '');
    return {
        type: UPDATE_BUILDINGS,
        data,
    };
};