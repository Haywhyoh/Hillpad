import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBachelors = createAsyncThunk('bachelors/fetchBachelors', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/course/list?programme=bachelors');
  const data = details.data.results;
  const count = details.data.count;
  const result = {data, count};
  return result;
})

const bachelorsSlice = createSlice({
    name: 'bachelors',
    initialState: {
        bachelorsList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateBachelors: (state, action) => {
        state.bachelorsList = action.payload
      }
    },
    extraReducers: {
        [fetchBachelors.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchBachelors.fulfilled]: (state, action) => {
          state.bachelorsList = action.payload.data;
          state.count = action.payload.count;
          state.pending = false;
        },
        [fetchBachelors.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateBachelors} = bachelorsSlice.actions;

export default bachelorsSlice.reducer;