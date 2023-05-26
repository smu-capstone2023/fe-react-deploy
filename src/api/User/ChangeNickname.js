import axios from "axios";

export const changeNickname = (nickname) => {
    return axios
        .put(
            `${process.env.REACT_APP_SERVER_URL}/auth/user/nickname`,
            {
                nickname: nickname,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            if (response.data.statue_code === 201) {
                return true;
            } else return false;
        })
        .catch((response) => {
            console.error("changeNickname", response);
            return false;
        });
};
