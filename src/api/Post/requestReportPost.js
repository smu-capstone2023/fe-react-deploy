import axios from 'axios';

export const requestReportPost = (post_id) => {
    return axios
        .put(
            `${process.env.REACT_APP_SERVER_URL}/board/report/${post_id}`,
            {},
            {
                headers: {
                    Authorization: localStorage.getItem('access_token'),
                },
            }
        )
        .then((response) => {
            console.log(response);
            return true;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
