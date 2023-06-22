import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('users/fetchUser', async (user) => {
    const token = await axios.post('https://54.221.177.186/api/account/token', user);
    const details = await axios.get('https://54.221.177.186/api/account/detail');
    return details;
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo : {
        firstName: 'john',
        lastName: 'sam',
        email: 'ade@gmail.com',
        },

        pending:false,
        error: false,
        isLoggedIn: false,

    },

    reducers: {},
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
    }
});

export const {update} = userSlice.actions;

export default userSlice.reducer;