import axios from 'axios';

export const getSearchKeyword = (boardId, keyword, lastId, perPage) => {
    console.log(keyword);
    return axios
        .get(
            `${process.env.REACT_APP_SERVER_URL}/board/cursor?board_id=${boardId}&last_id=${lastId}&per_page=${perPage}&keyword=${keyword}`,
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            }
        )
        .then((response) => {
            return response.data.posts;
        })
        .catch((response) => {
            return [];
        });
};
