import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
