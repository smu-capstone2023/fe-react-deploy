import axios from 'axios';

export const postCertificationPost = (imageUrl, content) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/manage/certificate/create`,
            {
                imageUrl: imageUrl,
                content: content,
            },
            {
                headers: { Authorization: localStorage.getItem('access_token') },
            }
        )
        .then((response) => {
            console.log(response);
            return response.data.isSuccess;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
