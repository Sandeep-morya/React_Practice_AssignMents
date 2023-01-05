import axios from "axios";
import {
  GET_TODOS_LOADING,
  GET_TODOS_ERROR,
  GET_TODOS_DATA,
} from "./todos.types";

export const getTodosAPI = () => {
  /**
  * Middleware
  * Redux Thunk
  * Here middleware Redux Thunk in passing passing argument-(dispatch)
  */
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    try {
      const { data } = await axios.get(`http://localhost:8080/todos`);
      dispatch({ type: GET_TODOS_DATA, payload: data });
    } catch (error) {
      dispatch({ type: GET_TODOS_ERROR });
    }
  };
};
