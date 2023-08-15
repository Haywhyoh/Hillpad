import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/course/list');
  const result = details.data.results;
  return result;
})

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        coursesList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateCourses: (state, action) => {
        state.coursesInfo = action.payload
      }
    },
    extraReducers: {
        [fetchCourses.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchCourses.fulfilled]: (state, action) => {
          state.coursesList = action.payload;
          state.pending = false;
        },
        [fetchCourses.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateCourses} = coursesSlice.actions;

export default coursesSlice.reducer;