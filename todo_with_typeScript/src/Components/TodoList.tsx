import { todoType } from "../App";
import TodoItem from "./TodoItem";
interface todoListType {
  list: todoType[] | [];
  handleDelete: (param: number) => void;

  handleStatus: (first: number, second: boolean) => void;
  handleEdit: (firstParam: number, second: string) => void;
}
const TodoList = ({
  list,
  handleDelete,
  handleStatus,
  handleEdit,
}: todoListType) => {
  return (
    <div className="list">
      {list.map((e) => (
        <TodoItem
          key={e.id}
          data={e}
          // passing Reference of these functions
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleStatus={handleStatus}
          // Same as 👇👇👇

          // handleDelete={(id)=>handleDelete(id)}
          // handleEdit={(id,text)=>handleEdit(id,text)}
          // handleStatus={(id,status)=>handleStatus(id,status)}
        />
      ))}
    </div>
  );
};

export default TodoList;
