import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{},
    reducers: {
        addUserInfo : (state,action) => {
            state.userInfo = action.payload;
        }
    },
})

export const {addUserInfo} =  profileSlice.actions
export default profileSlice.reducer;