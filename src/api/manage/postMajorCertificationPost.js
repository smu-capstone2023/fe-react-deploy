import axios from "axios";

export const postMajorCertificationPost = (imageUrl, content) => {
    console.log(imageUrl, content);
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/manage/certificate/create`,
            {
                image_url: imageUrl,
                content: content,
            },
            {
                headers: { Authorization: localStorage.getItem("access_token") },
            }
        )
        .then((response) => {
            return response.data.isSuccess;
        })
        .catch((response) => {
            console.error("postMajorCertificationPost", response);
            return false;
        });
};
