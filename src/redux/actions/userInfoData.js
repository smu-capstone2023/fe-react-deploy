import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../api/User/getUserInfo';
import { initialState } from '../slices/userSlice';

const userInfoData = createAsyncThunk(
    'userSlice/userInfoData',
    async() => {
		try {
			if (localStorage.getItem("access_token")) {
				const response = await getUserInfo();
				const data = response || {};
				return data;
			} else { return initialState; }
		} catch (error) {
			console.error(error);
			return {};
    	}
	}
);

export default userInfoData;