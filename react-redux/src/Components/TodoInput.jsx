import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

const TodoInput = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    const todoData = {
      id: Date.now(),
      title: todoTitle,
      status: false,
    };
    dispatch(addTodo(todoData));
    setTodoTitle("");
  };
  return (
    <div className="inputBox">
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={handleTodo}>ADD TODO</button>
    </div>
  );
};

export default TodoInput;
