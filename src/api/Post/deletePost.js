import axios from 'axios';

export const deletePost = (post_id) => {
    axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/board/delete/${post_id}`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            console.log(response);
            return true;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
