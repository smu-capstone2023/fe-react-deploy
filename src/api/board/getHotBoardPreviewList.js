import axios from 'axios';
export const getHotBoardPreviewList = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/hot`)
        
        .then((response) => {
            return response.data; 
        })

};
