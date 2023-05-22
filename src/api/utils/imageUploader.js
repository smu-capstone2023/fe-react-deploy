import axios from "axios";
export const uploadImageToServer = (formData) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/upload`, formData, {
            headers: {
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("uploadImageToServer", response);
            return "";
        });
};
