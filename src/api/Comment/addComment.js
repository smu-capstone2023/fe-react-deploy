import axios from "axios";

/**
 * @param post_id: number
 * @param content: string
 * @return boolean
 */
export const addComment = ({ post_id, content }) => {
    /**
     * https://documenter.getpostman.com/view/24666166/2s93JzLLNX#be6eecf4-06cb-4fe9-addb-5ed09a5786c6
     * 위의 포스트맨을 참고하여 로직을 작성해주세요.
     * 만약, 댓글 작성이 실패하면, false를, 성공하면 true를 반환해주세요.
     */
    
    const data = JSON.stringify({ //comment data
        post_id: post_id,
        content: content
      });
    
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '{{server_domain}}/comment/create',
        headers: {
          'Authorization': '{{access_token}}'
        },
        data: data
      };
    
      return axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          return true;          //댓글 성공!
        })
        .catch(function (error) {
          console.log(error);   //댓글 작성 실패
          return false;
        });
};
