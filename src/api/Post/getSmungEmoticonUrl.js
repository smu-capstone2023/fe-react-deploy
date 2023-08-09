import axios from "axios";

export const getSmungEmoticonUrl = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/upload/emoticon`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("getSmungEmoticonUrl", response);
            return [];
        });
};
