import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const list = useSelector((store) => store.todoList);
  return (
    <div className="list">
      {list?.map((e) => (
        <TodoItem key={e.id} todoData={e} />
      ))}
    </div>
  );
};

export default TodoList;
