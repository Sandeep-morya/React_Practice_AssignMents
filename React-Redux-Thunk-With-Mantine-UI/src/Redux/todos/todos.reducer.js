import {
  GET_TODOS_LOADING,
  GET_TODOS_ERROR,
  GET_TODOS_DATA,
} from "./todos.types";
const initial = {
  loading: false,
  error: false,
  todoList: [],
  totalpages: 1,
}
const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_TODOS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_TODOS_DATA:
      return {
        loading: false,
        error: false,
        todoList: action.payload.data,
        totalpages: action.payload.headers["x-total-count"],
      };

    default:
      return state;
  }
};

export default todoReducer;
