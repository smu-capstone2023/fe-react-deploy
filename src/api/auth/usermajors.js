import axios from 'axios';
export const setUserMajorListInLocalStorage = (accessToken) => {
    return axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/usermajors`, {
            headers: {
                Authorization: accessToken,
            },
        })
        .then((response) => {
            console.log(response);
            const tempMajorList = [];
            response.data.forEach((element) => {
                tempMajorList.push({ value: element.major_id, label: element.major_name, freeBoard: element.free_board_id });
            });

            localStorage.setItem('major_options', JSON.stringify(tempMajorList));
            return true;
        })
        .catch((response) => {
            console.log(response);
            return false;
        });
};
