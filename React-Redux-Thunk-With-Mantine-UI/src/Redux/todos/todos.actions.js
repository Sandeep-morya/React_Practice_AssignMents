import axios from "axios";
import {
  GET_TODOS_LOADING,
  GET_TODOS_ERROR,
  GET_TODOS_DATA,
  LIMIT,
} from "./todos.types";

export const getTodosAPI = (page = 1) => {
  /**
   * Middleware
   * Redux Thunk
   * Here middleware Redux Thunk in passing passing argument-(dispatch)
   */
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    try {
      const data = await axios.get(`http://localhost:8080/todos`, {
        params: {
          _page: page,
          _limit:LIMIT,
        },
      });
      dispatch({ type: GET_TODOS_DATA, payload: data });
    } catch (error) {
      dispatch({ type: GET_TODOS_ERROR });
    }
  };
};

export const addTodoItem = (text) => {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    try {
      axios.post(`http://localhost:8080/todos`, {
        completed: false,
        title: text,
      });
      dispatch(getTodosAPI());
    } catch (error) {
      dispatch({ type: GET_TODOS_ERROR });
    }
  };
};

export const deleteTodoItem = (id,page) => {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`);
      dispatch(getTodosAPI(page));
    } catch (error) {
      dispatch({ type: GET_TODOS_ERROR });
    }
  };
};

export const updateTodoItem =(id,data,page) =>{
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    try {
      await axios.patch(`http://localhost:8080/todos/${id}`,data);
      dispatch(getTodosAPI(page));
    } catch (error) {
      dispatch({ type: GET_TODOS_ERROR });
    }
  };
}
