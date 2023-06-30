import { createSlice } from '@reduxjs/toolkit';
import getUserInfoData from '../actions/getUserInfoData';

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
		builder.addCase(getUserInfoData.pending, (state,action)=>{
            return state;
		})
		builder.addCase(getUserInfoData.fulfilled, (state,action)=>{
			const response = action.payload;
            return response;
		})
		builder.addCase(getUserInfoData.rejected, (state,action)=>{
			return state;
		})
	},
});

export default userSlice;