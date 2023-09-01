import { instance } from "api/interceptor";

export const uploadScheduleImageToServer = (formData: FormData) => {
    return instance
        .get(`/upload/schedule`, formData, {
            headers: {
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response: any)=>{
            return response.data;
        })
        .catch((response: any)=>{
            console.error("uploadScheduleImageToServer", response);
            return "";
        })
};