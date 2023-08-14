import axios from "axios";

export const changeTimeTable = (image) => {
    return axios
        .put(
            `${process.env.REACT_APP_SERVER_URL}/auth/edit/timetable`,
            {
                time_table: image,
            },
            {
                headers: {
                    Authorization: localStorage.getItem("access_token"),
                },
            }
        )
        .then((response) => {
            if (response.data.status_code) return true;
            else {
                return false;
            }
        })
        .catch((response) => {
            console.error("changeTimeTable", response);
            return false;
        });
};
