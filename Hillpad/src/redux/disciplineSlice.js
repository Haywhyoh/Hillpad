import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDisciplines = createAsyncThunk('disciplines/fetchDisciplines', async () => {
  const details = await axios.get('https://54.221.177.186/api/academics/discipline/list');
  const result = details.data.results;
  return result;
})

const disciplinesSlice = createSlice({
    name: 'disciplines',
    initialState: {
        disciplinesList : [],
        pending:false,
        error: false,
    },
    reducers: {
      updateDisciplines: (state, action) => {
        state.disciplinesInfo = action.payload
      }
    },
    extraReducers: {
        [fetchDisciplines.pending]: (state) => {
          state.pending = true;
          state.error = false;

        },
        [fetchDisciplines.fulfilled]: (state, action) => {
          state.DisciplinesList = action.payload;
          state.pending = false;
        },
        [fetchDisciplines.rejected]: (state) => {
          state.pending = false;
          state.error = true;
        }
    }
});

export const {updateDisciplines} = disciplinesSlice.actions;

export default disciplinesSlice.reducer;