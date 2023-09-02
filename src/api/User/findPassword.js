import axios from "axios";

export const findPassword = () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/find_password`, {
        headers: {
            access_token: localStorage.getItem("access_token"),
        },
    })
    .then((response)=>{
        return true;
    })
    .catch((response)=>{
        console.error("findPassword", response);
        return false;
    })
}