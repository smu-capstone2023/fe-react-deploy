import axios from 'axios';

export const postCertificationPost = (imageUrl, content) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}:8001/manage/certificate/create`,
            {
                imageUrl: imageUrl,
                content: content,
            },
            {
                headers: { Authorization: localStorage.getItem('access_token') },
            }
        )
        .then((response) => {
            return response.data.isSuccess;
        })
        .catch((response) => {
            return false;
        });
};
