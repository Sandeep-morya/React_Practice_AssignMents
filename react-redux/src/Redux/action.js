// import { INC,DEC } from "./actionTypes";

// export const increment = (payload) => ({ type: INC, payload });
// export const decrement = (payload) => ({ type: DEC, payload });

import { ADD, DELETE, UPDATE } from "./actionTypes";

export const addTodo = (payload) => ({ type: ADD, payload });
export const deleteTodo = (payload) => ({ type: DELETE, payload });
export const updateTodo = (id,changes) => ({type:UPDATE,payload:{id,changes}})
