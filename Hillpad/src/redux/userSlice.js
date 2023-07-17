import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('users/fetchUser', async (user) => {
    axios.defaults.withCredentials = true;
    const token = await axios.post('https://54.221.177.186/api/account/token', user,  { withCredentials: true });
    const details = await axios.get('https://54.221.177.186/api/account/detail');
    const result = details.data;
    const res = { email: result.email, firstName: result.first_name, lastame: result.last_name};
    return res;
})
export const fetchUser2 = createAsyncThunk('users/fetchUser', async (user) => {
  axios.defaults.withCredentials = true;
  const details = await axios.get('https://54.221.177.186/api/account/detail');
  const result = details.data;
  const res = { email: result.email, firstName: result.first_name, lastame: result.last_name};
  return res;
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo : {
        firstName: '',
        lastName: '',
        email: '',
        },

        pending:false,
        error: false,
        isLoggedIn: false,

    },

    reducers: {
      update: (state, action) => {
        state.userInfo = action.payload
      }
    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
          state.pending = true;
          state.error = false;
          state.isLoggedIn = false;

        },
        [fetchUser.fulfilled]: (state, action) => {
          state.userInfo = action.payload;
          state.pending = false;
          state.isLoggedIn = true;

        },
        [fetchUser.rejected]: (state) => {
          state.pending = false;
          state.error = true;
          state.isLoggedIn = false;
        },
        [fetchUser2.pending]: (state) => {
          state.pending = true;
          state.error = false;
          state.isLoggedIn = false;

        },
        [fetchUser2.fulfilled]: (state, action) => {
          state.userInfo = action.payload;
          state.pending = false;
          state.isLoggedIn = true;

        },
        [fetchUser2.rejected]: (state) => {
          state.pending = false;
          state.error = true;
          state.isLoggedIn = false;
        }
    
    }
});

export const {update} = userSlice.actions;

export default userSlice.reducer;