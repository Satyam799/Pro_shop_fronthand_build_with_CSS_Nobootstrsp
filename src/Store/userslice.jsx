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
                url:'/api/user/'
            })
        })
    })
})

export const {useGetAllUsersQuery,useUpdateuserMutation,useSigninuserMutation,useLogginguseroutMutation}=User