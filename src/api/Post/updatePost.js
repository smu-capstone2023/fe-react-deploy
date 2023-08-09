import axios from "axios";

export const updatePost = ({ title, content, post_id, is_anonymous, image_url_list }) => {
    return axios
        .patch(
            `${process.env.REACT_APP_SERVER_URL}/board/update/${post_id}`,
            {
                title: title,
                content: content,
                is_anonymous: is_anonymous,
                image_url_list: image_url_list,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            console.log(response.data);
            return true;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
