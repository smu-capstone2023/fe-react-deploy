import axios from "axios"

export const changeProfileImage = (image) => {
    return axios
        .put(`${process.env.REACT_APP_SERVER_URL}/auth/user/profile_image`,
        {
            image: image,
        },
        {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            return response.data.image;
        })
        .catch((response) => {
            console.log(response);
            return '';
        })
}