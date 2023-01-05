import axios from "axios";
import {
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,
  GET_POSTS_DATA,
} from "./posts.types";

export const getPostsAPI = () => {
  /**
  * Middleware
  * Redux Thunk
  * Here middleware Redux Thunk in passing passing argument-(dispatch)
  */
  return async (dispatch) => {
    dispatch({ type: GET_POSTS_LOADING });
    try {
      const { data } = await axios(`http://localhost:8080/posts`);
      dispatch({ type: GET_POSTS_DATA, payload:data});
    } catch (error) {
      dispatch({ type: GET_POSTS_ERROR });
    }
  };
};

