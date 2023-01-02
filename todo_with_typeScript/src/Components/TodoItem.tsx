import React from "react";
import { todoType } from "../App";
// using enum*
enum ButtonName {
  edit = "Edit",
  delete = "Delete",
  toggle = "Toggle",
}
enum todoStatus {
  pending = "Pending",
  compelete = "Compelete",
}

// using (javascript version of enum)/alternative

// const ButtonName={
//     edit:'Edit',
//     delete:'Delete'
// }as const;

interface itemType {
  data: todoType;
  handleDelete: (param: number) => void;
  handleStatus: (first: number, second: boolean) => void;
  handleEdit: (first: number, second: string) => void;
}

const TodoItem = ({
  data,
  handleDelete,
  handleEdit,
  handleStatus,
}: itemType) => {
  const handlePrompt = (id: number) => {
    const title = prompt("Enter New Title");
    handleEdit(id, title || "");
  };

  return (
    <div className="item">
      <h3>{data.title}</h3>
      <h3>{data.status ? todoStatus.pending : todoStatus.compelete}</h3>
      <button onClick={() => handlePrompt(data.id)}>{ButtonName.edit}</button>
      <button onClick={() => handleStatus(data.id, data.status)}>
        {ButtonName.toggle}
      </button>
      <button onClick={() => handleDelete(data.id)}>{ButtonName.delete}</button>
    </div>
  );
};

export default TodoItem;
