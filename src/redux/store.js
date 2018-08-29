import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducer';

const client = axios.create({
    baseURL: 'http://localhost:8080',
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
