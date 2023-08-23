import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMasters = createAsyncThunk('masters/fetchMasters', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/course/list?programme=masters');
  const data = details.data.results;
  const count = details.data.count;
  const result = {data, count};
  return result;
})

const mastersSlice = createSlice({
    name: 'masters',
    initialState: {
        mastersList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateMasters: (state, action) => {
        state.mastersList = action.payload
      }
    },
    extraReducers: {
        [fetchMasters.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchMasters.fulfilled]: (state, action) => {
          state.mastersList = action.payload.data;
          state.count = action.payload.count;
          state.pending = false;
        },
        [fetchMasters.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateMasters} = mastersSlice.actions;

export default mastersSlice.reducer;