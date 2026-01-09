import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './data-slice'
import authSlice  from './auth-slice'

const store = configureStore({
    reducer:{
        datas:dataSlice,
        auth:authSlice
    }
})


export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>