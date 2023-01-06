import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_DATA,
} from "./users.types";

const initial = {
  loading: false,
  error: false,
  usersList: [],
};

const usersReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_DATA:
      return {
        loading: false,
        error: false,
        usersList: action.payload
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default usersReducer;