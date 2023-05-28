import axios from "axios";

export const likeComment = (commentId) => {
    return axios
        .put(
            `${process.env.REACT_APP_SERVER_URL}/comment/like`,
            {
                comment_id: commentId,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            if (response.data.status_code === 201) {
                return true;
            } else {
                return false;
            }
        })
        .catch((response) => {
            console.error("likeComment", response);
            return false;
        });
};
