import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDegreeTypes = createAsyncThunk('degreeTypes/fetchDegreeTypes', async () => {
    const details = await axios.get('https://54.221.177.186/api/academics/degree_type/list');
    const result = details.data.results;
    return result;
})

const degreeTypesSlice = createSlice({
    name: 'degreeTypes',
   initialState: {
    degreeTypesList: [],
    pending: false,
    error: false,
   },
   reducers: {
    updateDegreeTypes: (state, action) => {
      state.degreeTypesList = action.payload
    }
  },
  extraReducers: {
    [fetchDegreeTypes.pending]: (state) => {
      state.pending = true;
      state.error = false;

    },
    [fetchDegreeTypes.fulfilled]: (state, action) => {
      state.degreeTypesList = action.payload;
      state.pending = false;
    },
    [fetchDegreeTypes.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    }
}
})

export const {updateDegreeTypes} = degreeTypesSlice.actions;

export default degreeTypesSlice.reducer;