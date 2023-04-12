import axios from "axios"

const SignUpSite = (shcool_id, nickname, password, image) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/join`, 
        {
            school_id: shcool_id,
            nickname: nickname,
            password: password,
            image: image,
        },
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            if (response.data.status_code === 201) {
                return response.data.profile_image_url;
            }
        })
        .catch((response) => {
            console.log(response);
            return '';
        });
};