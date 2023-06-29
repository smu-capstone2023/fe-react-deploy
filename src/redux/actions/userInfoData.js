import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../api/User/getUserInfo';

const userInfoData = createAsyncThunk(
    'userSlice/userInfoData',
    async() => {
		try {
			const response = await getUserInfo();
			const data = response || [];
			return data;
		} catch (error) {
			console.error(error);
			return '';
    	}
	}
);

export default userInfoData;