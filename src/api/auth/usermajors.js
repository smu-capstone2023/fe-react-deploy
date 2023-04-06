import axios from 'axios';
export const setUserMajorListInLocalStorage = (accessToken) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/usermajors`, {
            headers: {
                Authorization: accessToken,
            },
        })
        .then((response) => {
            const tempMajorList = [];
            const majorIdList = [];
            response.data.forEach((element) => {
                tempMajorList.push({ value: element.major_id, label: element.major_name, freeBoard: element.free_board_id });
            });
            localStorage.setItem('major_options', JSON.stringify(tempMajorList));
            localStorage.setItem('major_id_list', JSON.stringify(majorIdList));
            return true;
        })
        .catch((response) => {
            return false;
        });
};
