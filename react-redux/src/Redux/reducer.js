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

import { ADD, DELETE, UPDATE } from "./actionTypes";
const reducer = (store, { type, payload }) => {
  switch (type) {
    // <----- Insert new Todo in List ----->

    case ADD:
      return {
        ...store,
        todoList: [...store.todoList, payload],
      };
    // <----- Delete the selected Todo Item ----->
    case DELETE:
      return {
        ...store,
        todoList: store.todoList.filter((e) => e.id != payload),
      };
    
    // <----- Used To update Changes in Todo ----->
    case UPDATE:

      console.log(payload)
      return {
        ...store,
        todoList: store.todoList.map((e) =>
          e.id === payload.id ? { ...e, ...payload.changes } : e
        ),
      };
    default:
      return store;
  }
};
export default reducer;
