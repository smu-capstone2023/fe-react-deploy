import axios from "axios";
export const uploadScheduleImageToServer = (formData) => {
    return axios
        .post(`${process.env.REACT_APP_SERVER_URL}/upload/timetable`, formData, {
            headers: {
                Authorization: localStorage.getItem("access_token"),
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((response) => {
            console.error("uploadScheduleImageToServer", response);
            return "";
        });
};