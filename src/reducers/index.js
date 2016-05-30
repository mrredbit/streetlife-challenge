import { combineReducers } from 'redux';
import newsFeedReducer from './newsFeedReducer.js'
import generalReducer from './generalReducer.js'

const reducers = {
    newsFeedState: newsFeedReducer,
    generalState: generalReducer
};

module.exports = combineReducers(reducers);
