import axios from "axios";
import {
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_USERS_DATA,
} from "./users.types";

export const getUsersAPI = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_LOADING });
    try {
      const { data } = await axios.get(`http://localhost:8080/users/`);
      dispatch({ type: GET_USERS_DATA, payload: data });
    } catch (error) {
      dispatch({ type: GET_USERS_ERROR });
    }
  };
};
