import axios from "axios";

/**
 * @param post_id: number
 * @param content: string
 * @return boolean
 */

export const addComment = (post_id, content) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/comment/create/`,
            {
                post_id: post_id,
                content: content,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            console.log(response);
            if (response.data.status_code === 201) {
                return true;
            } else {
                return false;
            }
        })
        .catch((response) => {
            console.error("addComment", response);
            return false;
        });
};
