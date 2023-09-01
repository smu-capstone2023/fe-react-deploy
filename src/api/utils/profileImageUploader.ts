import { instance } from "api/interceptor";

export const uploadProfileImageToServer = (formData: FormData) => {
    return instance
        .get(`/upload/profile`, formData, {
            headers: {
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response: any)=>{
            return response.data;
        })
        .catch((response: any)=>{
            console.error("uploadProfileImageToServer", response);
            return "";
        })
};