import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import profileReducer from './profile/reducer';

const rootReducer = combineReducers({
    profileReducer,
    form: formReducer,
});

export default rootReducer;
