//createSlice状态切片

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogged:false,
        token:null,
        data:null
    },
    reducers:{
        login(state, action){
            state.isLogged = true;
            state.token = action.payload.token;
            state.data = action.payload.data;
        },
        logout(state, action){
            state.isLogged = false;
            state.token = null;
            state.data = null;
        }
    }
})

export const {login, logout} = authSlice.actions
export const userReducer = authSlice.reducer