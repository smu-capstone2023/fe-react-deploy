import axios from "axios"

const GetUserMajorsInfo = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/usermajors`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            if (response.data.status_code === 200) {
                return response.data;
            }
        })
        .catch((response) => {
            console.log(response);
            return [];
        })

}