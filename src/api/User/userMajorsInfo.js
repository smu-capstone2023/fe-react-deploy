import axios from "axios"
import { useEffect } from "react";

const getUserMajorsInfo = () => {
    axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/user_info`, 
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            return response.data.majors;
        })
        .catch((response) => {
            console.log(response);
            return [];
        })
}
