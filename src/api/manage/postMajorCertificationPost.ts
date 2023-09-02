import { instance } from "api/interceptor";

export const postMajorCertificationPost = (imageUrl: string, content: string) => {
    return instance
        .post(`/manage/certificate/create`, {
            image_url: imageUrl,
            content: content,
        })
        .then((response: any) => {
            return response.data.isSuccess;
        })
        .catch((error: any) => {
            console.error("postMajorCertificationPost", error);
            return false;
        });
};
