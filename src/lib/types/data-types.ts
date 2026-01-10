import type { Status } from "./status-types"
export enum OrderStatus{
Pending ='pending',
Delivered = 'delivered',
OntheWay = 'ontheway',
Cancel = 'cancelled',
Preparation = 'preparation',
All = 'all'


}
export enum PaymentMethod{
    COD = 'cod',
    ESEWA = 'esewa',
    KHALTI='khalti' 
}
export enum PaymentStatus{
    Unpaid = 'unpaid',
    Paid= 'paid',
    Pending = 'pending'
}
export interface  ItemDetails{
    productId : string, 
    quantity : number
}
interface payment {
      paymentMethod:PaymentMethod
}
interface OrderPaymentData extends payment{
paymentStatus:PaymentStatus
}
export interface User{
    id:string,
    email:string,
    username:string
}

export interface Category{
    id:string,
    categoryName:string
}

export interface OrderData{
    phoneNumber:string,
    shippingAddress:string,
    totalAmount:number,
    paymentDetails:payment,
    items:ItemDetails[],
    id:string,
    orderStatus:OrderStatus
}

export interface Product{
    id?:string,
    productName:string,
    productDescription:string,
    productImageUrl:File | null,
    productPrice : number,
    productTotalStockQty:number
    createdAt? :string,
    updatedAt?:string
    user?:User,
    categoryId :string,
    userId? :string,
    Category?:Category
}





export interface InitialState{
    products:Product[],
    users:User[],
    orders:OrderData[],
    status:Status,
    singleProduct:Product | null
}