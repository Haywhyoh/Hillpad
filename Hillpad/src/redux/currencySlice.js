import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/currency/list?page_size=1000');
  const result = details.data.results;
  return result;
})

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        currenciesList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateCurrencies: (state, action) => {
        state.currenciesList = action.payload
      }
    },
    extraReducers: {
        [fetchCurrencies.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchCurrencies.fulfilled]: (state, action) => {
          state.currenciesList = action.payload;
          state.pending = false;
        },
        [fetchCurrencies.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateCurrencies} = currenciesSlice.actions;

export default currenciesSlice.reducer;