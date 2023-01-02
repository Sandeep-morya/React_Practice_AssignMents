import TodoInput from "./Components/TodoInput";
import { useEffect, useState } from "react";
import TodoList from "./Components/TodoList";
import { deleteTodo, editTodo, getTodos, postTodo } from "./Components/api";

export interface todoType {
  id: number;
  title: string;
  status: boolean;
}

export interface objType {
  title?: string;
  status?: boolean;
}

const App = () => {
  const [list, setList] = useState<todoType[]>([]);
  const handleAdd = (text: string) => {
    postTodo({ title: text, status: false })
      .then(getTodoList)
      .catch((rr) => console.log(rr));
  };

  const handleDelete = (id: number) => {
    deleteTodo(id)
      .then(getTodoList)
      .catch((rr) => console.log(rr));
  };

  const handleEdit = (id: number, title: string) => {
    editTodo<number, objType>(id, { title })
      .then(getTodoList)
      .catch((rr) => console.log(rr));
  };

  const handleStatus = (id: number, status: boolean) => {
    editTodo<number, objType>(id, { status: !status })
      .then(getTodoList)
      .catch((rr) => console.log(rr));
  };
  const getTodoList = () => {
    getTodos()
      .then((e) => setList(e))
      .catch((rr) => console.log(rr));
  };

  useEffect(getTodoList, []);

  return (
    <div className="app">
      <TodoInput
        placeholder="Enter Todo Title"
        handleAdd={handleAdd}
      ></TodoInput>
      <TodoList
        list={list}
        // passing Reference of these functions
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleStatus={handleStatus}
        // Same as 👇👇👇

        // handleDelete={(id)=>handleDelete(id)}
        // handleEdit={(id,text)=>handleEdit(id,text)}
        // handleStatus={(id,status)=>handleStatus(id,status)}
      />
    </div>
  );
};

export default App;
