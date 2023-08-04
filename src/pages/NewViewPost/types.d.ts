export interface IComment {
    comment_id: number;
    username: string;
    user_id: string;
    content?: string;
    likes: number;
    isLiked: boolean;
    created_time: string;
    updated_time?: string;
}

export interface IPost {
    post_id: number;
    username: string;
    user_id: number;
    title: string;
    content: string;
    image_urls?: any;
    view: number;
    likes: number;
    scraps: number;
    isLiked: boolean;
    isScrap: boolean;
    is_author: boolean;
    comments?: IComment[];
    created_time: string;
    updated_time?: string;
}
