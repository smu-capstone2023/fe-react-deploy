import axios from "axios"

const LoginSite = (school_id, password) => {
    axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, 
        {
            school_id : school_id,
            password : password,
        })
        .then((response) => {
            if (response.data.status_code === 200) {
                return response.data.access_token;
            }
        })
        .catch((response) => {
            console.log(response);
            return '';
        })
}