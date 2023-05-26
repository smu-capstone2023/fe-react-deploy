import axios from "axios";

export const deleteComment = (commentId) => {
    return axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/comment/delete/${commentId}`, {
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
            console.error("deleteComment", response);
            return false;
        });
};
