//createSlice状态切片

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:()=>{
        const token = localStorage.getItem('token');

        //判断是否有token，没有token则为空，有token则有登录数据
        if(!token){
            return{
                isLogged:false,
                token:null,
                data:null
            }
        }
        
        return{
            isLogged:true,
            token,
            data:JSON.parse(localStorage.getItem('data'))
        }

    },
    reducers:{
        login(state, action){
            state.isLogged = true;
            state.token = action.payload.token;
            state.data = action.payload.data;

            localStorage.setItem('token', state.token);
            localStorage.setItem('data',JSON.stringify(state.data))
        },
        logout(state, action){
            state.isLogged = false;
            state.token = null;
            state.data = null;

            
            localStorage.removeItem('token');
            localStorage.removeItem('data')
        }
    }
})

export const {login, logout} = authSlice.actions
export const userReducer = authSlice.reducer