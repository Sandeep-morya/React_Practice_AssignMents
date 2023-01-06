import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../Redux/todos/todos.actions";
import { LIMIT } from "../Redux/todos/todos.types";

export function InputWithButton({ page, setPage, todoList }) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const getPage = () => {
    if (todoList.length % LIMIT === 0) {
      return 1;
    }
    return 0;
  };

  const handleClick = () => {
    if (text.length) {
      dispatch(addTodoItem(text));
      setTimeout(() => {
        setPage(page + getPage());
      }, 500);
      setText("");
    } else {
      setError(true);
    }
  };
  return (
    <TextInput
      icon={"🔍"}
      radius="xl"
      size="md"
      value={text}
      onChange={(e) => {
        setError(false);
        setText(e.target.value);
      }}
      error={error ? "This field is Required" : null}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={"blue"}
          variant="filled"
          onClick={handleClick}
        >
          "+"
        </ActionIcon>
      }
      placeholder="Search questions"
      rightSectionWidth={42}
    />
  );
}

export default InputWithButton;
