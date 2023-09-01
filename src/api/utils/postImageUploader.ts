import { instance } from "api/interceptor";

export const uploadPostImageToServer = (formData: FormData) => {
    return instance
        .get(`/upload/post`, formData, {
            headers: {
                "Contest-Type": "multipart/form-data",
            },
        })
        .then((response: any)=>{
            return response.data;
        })
        .catch((response: any)=>{
            console.error("uploadPostImageToServer", response);
            return "";
        })
};