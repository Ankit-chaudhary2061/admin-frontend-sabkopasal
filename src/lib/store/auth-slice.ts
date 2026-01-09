import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "./store";
import api from "../http/api";
import { AuthState, ILoginData, User } from "../types/auth-types";
import { Status } from "../types/status-types";


const initialState:AuthState ={
user :{} as User,
status:Status.LOADING,
token:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser(state:AuthState, action:PayloadAction<User>){
            state.user = action.payload
        },
        setStatus(state:AuthState, action:PayloadAction<Status>){
            state.status = action.payload
        },
         resetStatus(state:AuthState){
            state.status  = Status.LOADING 
        },
        setToken(state:AuthState, action:PayloadAction<string>){
            state.user.token = action.payload
        },
        setLogoutUser(state:AuthState, action:PayloadAction<string | null>){
            state.token = null
            state.user ={
                username : null,
                email: null,
                password: null,
                token : null
            }
        }
    }
})


export const {setUser, setStatus, resetStatus, setToken ,setLogoutUser} = authSlice.actions
export default authSlice.reducer




export function loginUser(data:ILoginData){
    return async function loginUserThunk(dispatch:AppDispatch){
        try {
            const response = await api.post('/login', data)
            if(response.status === 200){
                dispatch(setUser(response.data.data))
               dispatch(setToken(response.data.data.token))
                localStorage.setItem('token', response.data.data.token)
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error :any ) {
            console.error(error);
      dispatch(setStatus(Status.ERROR)); 
        }
    }
}