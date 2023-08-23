import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDoctorates = createAsyncThunk('doctorates/fetchDoctorates', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/course/list?programme=doctorates');
  const data = details.data.results;
  const count = details.data.count;
  const result = {data, count};
  return result;
})

const doctoratesSlice = createSlice({
    name: 'doctorates',
    initialState: {
        doctoratesList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateDoctorates: (state, action) => {
        state.doctoratesList = action.payload
      }
    },
    extraReducers: {
        [fetchDoctorates.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchDoctorates.fulfilled]: (state, action) => {
          state.doctoratesList = action.payload.data;
          state.count = action.payload.count;
          state.pending = false;
        },
        [fetchDoctorates.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateDoctorates} = doctoratesSlice.actions;

export default doctoratesSlice.reducer;