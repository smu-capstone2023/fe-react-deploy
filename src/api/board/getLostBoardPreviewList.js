import axios from 'axios';
export const getLostBoardPreviewList = () => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/board/lost`)
        
        .then((response) => {
            console.log(response.data)
            return response.data; 
        })

};
