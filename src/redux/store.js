import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducer';

const SERVER_URL = 'https://blockcities-server.herokuapp.com';

const client = axios.create({
    baseURL: SERVER_URL,
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
