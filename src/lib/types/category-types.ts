import { Status } from "./status-types"

export interface Category{
    id:string,
    categoryName:string
}

export interface CategoryState{
    category: Category[],
    status:Status
}