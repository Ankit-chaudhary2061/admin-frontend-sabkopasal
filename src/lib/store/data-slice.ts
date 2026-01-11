import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialState, OrderData, Product, SingleOrder, User } from "../types/data-types";
import { Status } from "../types/status-types";
import type { AppDispatch } from "./store";
import api from "../http/api";
import apiWithToken from "../http/api-with-token";


const initialState:InitialState={
    orders:[],
    products:[],
    users:[],
    singleProduct:null,
    singleOrder:[],
    status:Status.LOADING
}


const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
         setStatus(state:InitialState, action:PayloadAction<Status>){
            state.status =action.payload
         },
         setProducts(state:InitialState, action:PayloadAction<Product[]>){
            state.products = action.payload
         },
         setOrders(state:InitialState, action:PayloadAction<OrderData[]>){
            state.orders = action.payload
         },
           setSingleProduct(state:InitialState, action:PayloadAction<Product>){
            state.singleProduct = action.payload
         },
          setSingleOrder(state:InitialState, action:PayloadAction<SingleOrder[]>){
            state.singleOrder = action.payload
         },
         setUsers(state:InitialState, action:PayloadAction<User[]>){
            state.users = action.payload
         },
           setDeleteProduct(state: InitialState, action: PayloadAction<string>) {
  const index = state.products.findIndex(
    (item) => item.id === action.payload
  );

  if (index !== -1) {
    state.products.splice(index, 1);
  }
},
    setDeleteOrder(state: InitialState, action: PayloadAction<string>) {
  const index = state.orders.findIndex(
    (item) => item.id === action.payload
  );

  if (index !== -1) {
    state.orders.splice(index, 1);
  }
},
    setDeleteUser(state: InitialState, action: PayloadAction<string>) {
  const index = state.users.findIndex(
    (item) => item.id === action.payload
  );

  if (index !== -1) {
    state.users.splice(index, 1);
  }
}

    }
})


export const {setOrders,setSingleOrder,setProducts,setStatus,setUsers,setSingleProduct,setDeleteProduct,setDeleteOrder, setDeleteUser} = dataSlice.actions
export default dataSlice.reducer


export function fetchProduct(){
    return async function fetchProductThunk(dispatch : AppDispatch){
        try {
            const response =  await api.get('/admin/product')
            if(response.status ===  200){
                  const {data }=response.data
                console.log(data,':dataa')
                dispatch(setProducts(data))
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))

            }
       } catch (error:any) {
              console.error(error)

               dispatch(setStatus(Status.ERROR))
             
            
        }
    }
}
export function fetchOrder(){
    return async function fetchOrderThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.get('/admin/orders')
            if(response.status === 200 || 201){
                dispatch(setOrders(response.data.data))
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

export function deleteOrder(id :string){
    return async function deleteOrderThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.delete('/admin/order/' +id)
            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setDeleteOrder(id))
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}
export function fetchUsers(){
    return async function fetchUsersThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.get('/users')
            if(response.status === 200 || 201){
                dispatch(setUsers(response.data.data))
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
export function deleteUser(id:string){
return async function  deleteUserThunk(dispatch:AppDispatch){
    try {
        const response = await apiWithToken.delete(`/users/${id}`)

            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(deleteUser(id))
               
              
            }else{
                dispatch(setStatus(Status.ERROR))

            } 
    } catch (error) {
        console.log(error)            
                dispatch(setStatus(Status.ERROR)) 
    }
}
}

export function addProduct(data :Product){
    return async function addProductThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.post('/admin/product', data,{
                headers:{
                    "Content-Type" : "multipart/form-data"
                }})
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
// export function addProduct(data: Product) {
//   return async function addProductThunk(dispatch: AppDispatch) {
//     try {
//       const formData = new FormData();

//       formData.append("productName", data.productName);
//       formData.append("productDescription", data.productDescription);
//       formData.append("productPrice", String(data.productPrice));
//       formData.append("productTotalStockQty", String(data.productTotalStockQty));
//       formData.append("categoryId", data.categoryId);

//       // 👇 THIS MUST MATCH multer.single("image")
//       formData.append("image", data.productImageUrl as any);

//       const response = await apiWithToken.post(
//         "/admin/product",
//         formData
//       );

//       if (response.status === 200 || response.status === 201) {
//         dispatch(setStatus(Status.SUCCESS));
//       } else {
//         dispatch(setStatus(Status.ERROR));
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(Status.ERROR));
//     }
//   };
// }


export function deleteProduct(id :string){
    return async function deleteProductThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.delete(`/admin/product/${id}`)

            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(deleteProduct(id))
               
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}

export function singleProduct(id :string){
    return async function singleProductThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.get('/admin/product' + id)
            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setSingleProduct(response.data.data))
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}


export function singleOrder(id :string){
    return async function singleOrderThunk(dispatch:AppDispatch){
        try {
            const response = await apiWithToken.get(`/admin/order/${id}`)
            if(response.status === 200 || 201){
               
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setSingleOrder(response.data.data))
              
            }else{
                dispatch(setStatus(Status.ERROR))

            }
        } catch (error) {
            console.log(error)            
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}


// export function handleOrderStatus(status:string,id :string){
//     return async function singleOrderThunk(dispatch:AppDispatch){
//         try {
//             const response = await apiWithToken.get(`/admin/order/${id}/status`)
//             if(response.status === 200 || 201){
               
//                 dispatch(setStatus(Status.SUCCESS))
//                 dispatch(setOrderStatus({id,status}))
              
//             }else{
//                 dispatch(setStatus(Status.ERROR))

//             }
//         } catch (error) {
//             console.log(error)            
//                 dispatch(setStatus(Status.ERROR))
            
//         }
//     }
// }