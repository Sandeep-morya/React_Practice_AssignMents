// import { INC,DEC } from "./actionTypes";

// export const increment = (payload) => ({ type: INC, payload });
// export const decrement = (payload) => ({ type: DEC, payload });

import { ADD, DELETE, EDIT, TOGGLE } from "./actionTypes";

export const addTodo = (payload) => ({ type: ADD, payload });
export const deleteTodo = (payload) => ({ type: DELETE, payload });
export const editTodo = (payload) => ({ type: EDIT, payload });
export const toggleTodo = (payload) => ({ type: TOGGLE, payload });
