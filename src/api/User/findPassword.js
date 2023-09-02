import axios from "axios";

export const findPassword = ({school_id}) => {
    return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/auth/find_password`, {
        school_id: school_id,
    })
    .then((response)=>{
        return true;
    })
    .catch((response)=>{
        console.error("findPassword", response);
        return false;
    })
}