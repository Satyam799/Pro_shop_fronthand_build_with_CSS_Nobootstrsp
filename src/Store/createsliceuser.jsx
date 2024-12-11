import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userInfo:JSON.parse(localStorage.getItem('UserInfo')) || ''
}

const UserSlice=createSlice({
    name:'User',
    initialState,
    reducers:{
        Userinfor(state,action){
            localStorage.setItem('UserInfo',JSON.stringify(action.payload))
            state.userInfo=action.payload
        },
        Clearuserinfo(state){
            localStorage.clear('userInfo')

            state.userInfo=''
        }

    }

})

export const {Userinfor,Clearuserinfo}=UserSlice.actions

export default UserSlice.reducer