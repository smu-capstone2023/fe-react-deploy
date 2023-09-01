export interface IComment {
    comment_id: number;
    username: string;
    user_id: string;
    profile_img_url: string;
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
    profile_img_url: string;
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
    type: string;
    created_time: string;
    updated_time?: string;
}
