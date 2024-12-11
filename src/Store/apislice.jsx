import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery=fetchBaseQuery({baseUrl:'http://localhost:8000'})

const apiSlice=createApi({
    reducerPath:'cart',
    baseQuery,
    endpoints:(builder)=>({})
})

export default apiSlice