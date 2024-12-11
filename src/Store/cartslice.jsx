import apiSlice from "./apislice";



const cartslice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getItems:builder.query({
          query:()=>({
            url:'/api/product',
            credentials:'include'
            }),
            keepUnusedDataFor:5
        }),
        getItembyid:builder.query({
          query:(id)=>({
            url:`/api/product/${id}`,
            credentials:'include'
          })  
        }),
        Uploadimage:builder.mutation({
          query:(data)=>({
            url:`/api/product/upload/${data?.id}`,
            method:'PUT',
            credentials:'include',
            body:data
          })
        }),
        image:builder.mutation({
          query:(data)=>({
            url:`/api/product/image`,
            method:'POST',
            credentials:'include',
            body:data
          })
        })
    })
})

export const {useImageMutation,useGetItemsQuery,useGetItembyidQuery,useUploadimageMutation}=cartslice