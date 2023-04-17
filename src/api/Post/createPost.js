import axios from 'axios';

export const createPost = ({ title, content, board_id, is_anonymous, image_url_list }) => {
    return axios
        .post(
            `${process.env.REACT_APP_SERVER_URL}/board/create`,
            {
                title: title,
                content: content,
                board_id: board_id,
                is_anonymous: is_anonymous,
                image_url_list: image_url_list,
            },
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
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
