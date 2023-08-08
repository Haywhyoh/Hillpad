import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countryReducer from './countrySlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    user: userReducer,
    country: countryReducer,
   });
export default configureStore({
    reducer,
});
