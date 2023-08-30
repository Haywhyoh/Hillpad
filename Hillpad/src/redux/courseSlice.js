import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/course/list');
  const data = details.data.results;
  const count = details.data.count;
  const result = { data, count}
  return result;
})

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        coursesList : [],
        count: 0,
        pending:false,
        error: false,
    },
    reducers: {
      updateCourses: (state, action) => {
        state.coursesList = action.payload
      }
    },
    extraReducers: {
        [fetchCourses.pending]: (state) => {
          state.count = 0;
          state.pending = true;
          state.error = false;

        },
        [fetchCourses.fulfilled]: (state, action) => {
          state.coursesList = action.payload.data;
          state.count = action.payload.count
          state.pending = false;
        },
        [fetchCourses.rejected]: (state) => {
          state.count = 0;
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateCourses} = coursesSlice.actions;

export default coursesSlice.reducer;