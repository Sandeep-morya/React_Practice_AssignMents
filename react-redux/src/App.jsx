import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const store = useSelector((store)=>store);
  console.log(store)
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
