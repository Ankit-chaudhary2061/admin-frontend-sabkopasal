// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CategoryState } from "../types/category-types";
// import { Status } from "../types/status-types";
// import { Category } from "../types/data-types";


// const initialState:CategoryState = {
//     category :[],
//     status:Status.LOADING
// }


// const categorySlice = createSlice({
//     name:'category',
//     initialState,
//     reducers:{
//         setCategory(state:CategoryState, action:PayloadAction<Category[]>){
//             state.category = action.payload
//         }, 
//         setStatus(state:CategoryState, action : PayloadAction<Status>){
//             state.status = action.payload
//         }
//     }
// })

// export const{setCategory,setStatus} = categorySlice.actions
// export default  categorySlice.reducer



// export function addCategory(){
//     return async function addCategoryThunk(dispatch){

//     }
// }