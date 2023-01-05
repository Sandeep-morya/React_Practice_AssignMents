import {
  GET_POSTS_LOADING,
  GET_POSTS_ERROR,
  GET_POSTS_DATA,
} from "./posts.types";

const initial = {
  loading: false,
  error: false,
  postsList: [],
};

const postsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_POSTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_POSTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_POSTS_DATA: {
      return {
        loading: false,
        error: false,
        postsList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
