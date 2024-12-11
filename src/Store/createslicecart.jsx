import { createSlice } from "@reduxjs/toolkit";

const initialState=JSON.parse(localStorage.getItem('cart'))? JSON.parse(localStorage.getItem('cart')) :{
    cart:JSON.parse(localStorage.getItem('cart')) || [],
    shippingAddress:{},
    itemprice: '',
    shippingprice: '',
    taxprice: '',
    totalproice: '',
    paymetMethod: '',
}



const Cartslice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        Cartadding(state,action){
            const exiting=state.cart.find((el)=>el._id===action.payload._id)

            if(exiting){
                state.cart=state.cart.map((el)=>el._id===action.payload._id ? action.payload :el)
            }else{
                state.cart=[...state.cart,action.payload]
            }
        localStorage.setItem('cart',JSON.stringify(state))
        },
        Address(state,action){
            state.shippingAddress=action.payload
            localStorage.setItem('cart',JSON.stringify(state))

        },    
        prices(state,action){
            state.itemprice=action.payload
            state.paymetMethod= 'paypal',
            state.shippingprice= action.payload*0.025,
            state.taxprice= action.payload*0.050,
            state.totalproice= +state.itemprice+ +state.shippingprice+ +state.taxprice
            localStorage.setItem('cart',JSON.stringify(state))

        },
        Deleteitem(state,action){
            state.cart=state.cart.filter(el=>el._id!==action.payload._id)
        },
        Clearcart(state){
            state.cart=[]
            state.shippingAddress={}
            state.itemprice=''
            state.shippingprice=''
            state.taxprice=''
            state.totalproice=''
            state.paymetMethod=''

        }

    }
})

export const {Cartadding,prices,Address,Deleteitem,Clearcart}=Cartslice.actions

export default Cartslice.reducer