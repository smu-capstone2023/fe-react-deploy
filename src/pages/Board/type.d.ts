export interface IBoard {
    board_id: number;
    board_name: string;
    is_can_anonymous: boolean;
    is_notice: boolean;
}

export interface IPostPreview {
    post_id: number;
    username: string;
    title: string;
    preview: string;
    comments: number;
    views: number;
    created_time: string;
    updated_time: string;
}

export interface IBoardPagingResponse {
    major_name: string;
    board_name: string;
    total_page: number;
    posts: IPostPreview[];
}
