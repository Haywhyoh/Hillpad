import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countryReducer from './countrySlice';
import coursesReducer from './courseSlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    courses: coursesReducer,
   });
export default configureStore({
    reducer,
});
