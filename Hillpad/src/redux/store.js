import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countryReducer from './countrySlice';
import coursesReducer from './courseSlice';
import disciplinesReducer from './disciplineSlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    courses: coursesReducer,
    disciplines: disciplinesReducer,
   });
export default configureStore({
    reducer,
});
