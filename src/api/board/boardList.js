import axios from 'axios';
export const getBoardListFromMajorId = (majorId) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}:8001/board/board_list/${majorId}`)
        .then((response) => {
            return response.data;
        })
        .catch((resposne) => {
            alert('네트워크 오류!', '잠시후 다시 시도해주세요');
            return [];
        });
};
