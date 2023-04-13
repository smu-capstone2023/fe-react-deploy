import axios from "axios"

export const ChangePassword = (old_password, new_password, confirm_password) => {
    return axios
        .put(`${process.env.REACT_APP_SERVER_URL}/auth/user/password`, 
        {
            old_password : old_password,
            new_password : new_password,
            confirm_password : confirm_password,
        },
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.log(response);
            return {};
        });
};