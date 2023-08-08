import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountry = createAsyncThunk('country/fetchCountry', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/country/list');
  const result = details.data.results;
  return result;
})

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countryList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateCountry: (state, action) => {
        state.countryInfo = action.payload
      }
    },
    extraReducers: {
        [fetchCountry.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchCountry.fulfilled]: (state, action) => {
          state.countryList = action.payload;
          state.pending = false;
        },
        [fetchCountry.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateCountry} = countrySlice.actions;

export default countrySlice.reducer;