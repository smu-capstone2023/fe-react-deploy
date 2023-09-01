import axios from "axios";
export const uploadProfileImageToServer = (formData) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/upload/profile`, formData, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("uploadProfileImageToServer", response);
            return "";
        });
};