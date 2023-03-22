import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: null,
    },
    reducers: {
        setAuthToken: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = null;
        },
    },
});

export const { setAuthToken, logout } = authSlice.actions;

export default authSlice.reducer;
