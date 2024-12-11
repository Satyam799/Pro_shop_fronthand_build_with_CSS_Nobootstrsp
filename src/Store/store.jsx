import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apislice";
import Cartslice from './createslicecart'
import UserSlice from './createsliceuser'

const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        Cart:Cartslice,
        User:UserSlice
    
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store