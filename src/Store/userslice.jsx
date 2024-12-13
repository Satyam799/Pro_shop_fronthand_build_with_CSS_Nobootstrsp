import apiSlice from "./apislice";

const User=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        signinuser:builder.mutation({
            query:(data)=>({
                url:'/api/user/login',
                method:'POST',
                credentials:'include',
                body:data
            })
        }),
        Logginguserout:builder.mutation({
            query:()=>({
                url:'/api/user/logout',
                method:'POST',
                credentials:'include'
            })
        }),
        Updateuser:builder.mutation({
            query:(data)=>({
                url:'/api/user/profile',
                method:'PUT',
                credentials:'include',
                body:data
            })
        }),
        GetAllUsers:builder.query({
            query:()=>({
                url:'/api/user/',
                
            }),
            providesTags:['User']
        }),
        Updatetheuser:builder.mutation({
            query:(data)=>({
                url:`/api/user/useredit/${data?.id}`,
                method:'PUT',
                credentials:'include',
                body:data
            }),
            invalidatesTags:['User']
  
        }),
        userid:builder.query({
            query:(id)=>({
                url:`/api/user/admin/user/${id}`
            }),
            providesTags:['User'],
        })
    })
})

export const {useUseridQuery,useGetAllUsersQuery,useUpdateuserMutation,useSigninuserMutation,useLogginguseroutMutation,useUpdatetheuserMutation}=User