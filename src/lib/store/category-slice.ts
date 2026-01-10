import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, ICategory } from "../types/category-types";
import { Status } from "../types/status-types";
import { Category } from "../types/data-types";
import { AppDispatch } from "./store";
import api from "../http/api";
import apiWithToken from "../http/api-with-token";


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
        },
          setDeleteCategory(state: CategoryState, action: PayloadAction<string>) {
          const index = state.category.findIndex(
            (item) => item.id === action.payload
          );
        
          if (index !== -1) {
            state.category.splice(index, 1);
          }
        }
    }
})

export const{setCategory,setStatus, setDeleteCategory} = categorySlice.actions
export default  categorySlice.reducer



export function addCategory(data :ICategory){
    return async function addXCategoryThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.post('/admin/category', data)
            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}


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

export function deleteCategory(id :string){
    return async function deleteCategoryThunk(dispatch:AppDispatch){
        try {
               const response = await apiWithToken.delete(`/admin/category/${id}`)
            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setDeleteCategory(id))
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}