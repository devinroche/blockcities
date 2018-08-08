import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import profileReducer from './profile/reducer';
import signupReducer from './signup/reducer';

const rootReducer = combineReducers({
    profileReducer,
    signupReducer,
    form: formReducer,
});

export default rootReducer;
