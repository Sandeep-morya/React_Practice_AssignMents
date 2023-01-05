import React from "react";
import { useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/action";

const TodoItem = ({ todoData }) => {
  const { id, title, status } = todoData;
  const dispatch = useDispatch();
  return (
    <div className="item">
      <h2>{title}</h2>
      <h2 style={{ color: status ? "greenyellow" : "yellow" }}>
        {status ? "Compeletd" : "Pending"}
      </h2>
      <button
        onClick={() =>
          dispatch(
            updateTodo(id,{ title: prompt("Enter New Title") } )
          )
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          dispatch(updateTodo(id, { status: !status }))
        }
      >
        Toggle
      </button>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
