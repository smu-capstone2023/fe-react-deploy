import axios from "axios";

/**
 * @param post_id: number
 * @param content: string
 * @return boolean
 */
    /**
     * https://documenter.getpostman.com/view/24666166/2s93JzLLNX#be6eecf4-06cb-4fe9-addb-5ed09a5786c6
     * 위의 포스트맨을 참고하여 로직을 작성해주세요.
     * 만약, 댓글 작성이 실패하면, false를, 성공하면 true를 반환해주세요.
     */
    export const addComment = ({ post_id, content }) => {
      return axios.post(`${process.env.REACT_APP_SERVER_URL}/comment/create/${post_id}`, {
          post_id: post_id,
          content: content,
      }, {
          headers: {
              Authorization: localStorage.getItem('access_token'),
          },
      })
      .then((response) => {
          if (response.data.status_code === 201){
            return true;
          }else{
            return false;
          }
      })
      .catch((response) => {
          console.error("addComment", response);
          return false;
      });
  };
  
