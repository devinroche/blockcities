import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import signupReducer from './signup/reducer';

const rootReducer = combineReducers({
    signupReducer,
    form: formReducer,
});

export default rootReducer;
