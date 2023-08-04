import axios from "axios";

export const likePost = (postId: number | string): Promise<boolean | null> => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/board/like/`,
            {
                post_id: postId,
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
            return null;
        });
};
