import axios from "axios";

export const deletePost = (post_id) => {
    axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/board/delete/${post_id}`, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
            },
        })
        .then((response) => {
            if (response.data.status_code === 201) {
                return true;
            } else return false;
        })
        .catch((response) => {
            console.error("deletePost", response);
            return false;
        });
};
