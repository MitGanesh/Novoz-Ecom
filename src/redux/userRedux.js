import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currUser = action.payload
        },
        loginFailuer: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});


export const { loginStart, loginSuccess, loginFailuer } = userSlice.actions;

export default userSlice.reducer;