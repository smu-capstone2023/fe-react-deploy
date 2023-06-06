import axios from "axios";

export const likePost = (postId) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/board/like/`,
            {
                pose_id: postId,
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
            } else return false;
        })
        .catch((response) => {
            console.error("likePost", response);
            return false;
        });
};
