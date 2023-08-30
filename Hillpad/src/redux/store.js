import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countryReducer from './countrySlice';
import coursesReducer from './courseSlice';
import disciplinesReducer from './disciplineSlice';
import bachelorsReducer from './bachelorsSlice';
import mastersReducer from './mastersSlice'
import doctoratesReducer from './doctoratesSlice';
import degreeTypesReducer from './degreeTypeSlice';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    user: userReducer,
    country: countryReducer,
    courses: coursesReducer,
    disciplines: disciplinesReducer,
    bachelors: bachelorsReducer,
    masters: mastersReducer,
    doctorates: doctoratesReducer,
    degreeTypes: degreeTypesReducer,

   });
export default configureStore({
    reducer,
});
