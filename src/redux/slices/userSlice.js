import { createSlice } from '@reduxjs/toolkit';
import userInfoData from '../actions/userInfoData';

export const initialState = {
	username: "",
	school_id: "",
	profile_img_url: null,
	majors: [
	  {
		major_id: 1,
		major_name: "상명대학교",
		free_board_id: 1
	  }
	]
};

const userSlice = createSlice({
	name: 'user',
	initialState : {initialState},
	reducers : {},
	extraReducers : (builder) => {
		builder.addCase(userInfoData.pending, (state,action)=>{
            return state;
		})
		builder.addCase(userInfoData.fulfilled, (state,action)=>{
			const response = action.payload;
            return response;
		})
		builder.addCase(userInfoData.rejected, (state,action)=>{
			return state;
		})
	},
});

export default userSlice;