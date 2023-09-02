import { instance } from "api/interceptor";

export const createPost = (title: string, content: string, board_id: string | number, is_anonymous: boolean, image_url_list: string[]) => {
    return instance
        .post(`/board/create`, {
            title: title,
            content: content,
            board_id: board_id,
            is_anonymous: is_anonymous,
            image_url_list: image_url_list,
        })
        .then((response: any) => {
            if (response.data.status_code === 201) {
                return response.data.post_id;
            }
            return false;
        })
        .catch((error: any) => {
            if (error.response.status === 402) {
                alert("해당 게시판의 글쓰기 권한이 없습니다.");
            }
            if (error.response.status === 401) {
                alert("제목과 내용이 작성되지 않았습니다");
            }
            return false;
        });
};
