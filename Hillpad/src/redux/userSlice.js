import {createSlice, configureStore} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: 'john',
        lastName: 'sam',
        isLoggedIn: false,
        email: 'ade@gmail.com',
    },

    pending:false,
    error: false,
    reducers: {
        update: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.email = action.payload.email;

        }
    }
});

export const {update} = userSlice.actions;

export default userSlice.reducer;