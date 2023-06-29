import { createSlice } from '@reduxjs/toolkit';
import userInfoData from '../actions/userInfoData';

const userSlice = createSlice({
	name: 'user',
	initialState : {
        username: "",
    },
	reducers : {},
	extraReducers : (builder) => {
		builder.addCase(userInfoData.pending, (state,action)=>{
            return state;
		})
		builder.addCase(userInfoData.fulfilled, (state,action)=>{
			const response = action.payload;
            console.log(response);
            return response;
		})
		builder.addCase(userInfoData.rejected, (state,action)=>{
			return '';
		})
	},
});

export default userSlice;