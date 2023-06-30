import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../api/User/getUserInfo';
import { initialState } from '../slices/userSlice';

const getUserInfoData = createAsyncThunk(
    'userSlice/getUserInfoData',
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

export default getUserInfoData;