import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryState } from "../types/category-types";
import { Status } from "../types/status-types";
import { Category } from "../types/data-types";
import { AppDispatch } from "./store";
import api from "../http/api";


const initialState:CategoryState = {
    category :[],
    status:Status.LOADING
}


const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategory(state:CategoryState, action:PayloadAction<Category[]>){
            state.category = action.payload
        }, 
        setStatus(state:CategoryState, action : PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

export const{setCategory,setStatus} = categorySlice.actions
export default  categorySlice.reducer



// export function addCategory(){
//     return async function addCategoryThunk(dispatch){

//     }
// }


export function fetchCategory(){
    return  async function detchCategoryThunk(dispatch:AppDispatch){
        try {
           const response = await api.get('/admin/categories') 
           if(response.status === 200 || 201){
              const {data }=response.data
              dispatch(setCategory(data))
              dispatch(setStatus(Status.SUCCESS))
           }else{
              dispatch(setStatus(Status.ERROR))

           }
        } catch (error : any) {
            console.log(error)
              dispatch(setStatus(Status.ERROR))
            
        }
    }
}