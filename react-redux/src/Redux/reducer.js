// import { DEC, INC } from "./actionTypes";

// const reducer = (store, { type, payload }) => {
//   switch (type) {
//     case INC:
//       return {
//         ...store,
//         count: store.count + payload,
//       };
//     case DEC:
//       return {
//         ...store,
//         count: store.count - payload,
//       };
//     default:
//       return store;
//   }
// };

// export default reducer;

import { ADD, DELETE, EDIT, TOGGLE } from "./actionTypes";
const reducer = (store, { type, payload }) => {
  switch (type) {
    // <----- Insert new Todo in List ----->

    case ADD:
      return {
        todoList: [...store.todoList, payload],
      };
    // <----- Delete the selected Todo Item ----->
    case DELETE:
      return {
        todoList: store.todoList.filter((e) => e.id != payload),
      };
    // <----- Used to Toggle The Status ----->
    case TOGGLE:
      return {
        todoList: store.todoList.map((e) =>
          e.id === payload ? { ...e, status: !e.status } : e
        ),
      };
    // <----- Edit The Todo Title ----->
    case EDIT:
      return {
        todoList: store.todoList.map((e) =>
          e.id === payload.id ? { ...e, title: payload.title } : e
        ),
      };
    default:
      return store;
  }
};
export default reducer;
