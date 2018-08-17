import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import signupReducer from './signup/reducer';
import buildingReducer from './building/reducer'

const rootReducer = combineReducers({
    signupReducer,
    buildingReducer,
    form: formReducer,
});

export default rootReducer;
