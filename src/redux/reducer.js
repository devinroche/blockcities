import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signupReducer from './signup/reducer';
import buildingReducer from './building/reducer';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
    signupReducer,
    searchReducer,
    buildingReducer,
    form: formReducer,
});

export default rootReducer;
