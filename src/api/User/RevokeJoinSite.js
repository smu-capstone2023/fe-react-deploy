import axios from "axios"

export const revokeJoinSite = () => {
    return axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/auth/revoke`, {
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
        .then((response) => {
            if (response.status === 201) {
                return true;
            }
        })
        .catch((response) => {
            console.log(response);
            return false;
        })
}