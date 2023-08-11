import axios from "axios";

export const changeMbti = (mbti) => {
    return axios
        .put(
            `${process.env.REACT_APP_SERVER_URL}/auth/edit/mbti`,
            {
                mbti : mbti,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            if (response) {
                return true;
            }
        })
        .catch((response) => {
            console.error("changeMbti", response);
            return false;
        });
};