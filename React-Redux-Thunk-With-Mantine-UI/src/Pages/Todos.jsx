import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoItem,
  getTodosAPI,
  updateTodoItem,
} from "../Redux/todos/todos.actions";
import {
  Stack,
  LoadingOverlay,
  Alert,
  Text,
  Title,
  Button,
  Pagination,
} from "@mantine/core";
import "../styles/index.css";
import InputWithButton from "../Components/TodoInput";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../Redux/todos/todos.types";
const Todos = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams();

  const { loading, error, todoList, totalpages } = useSelector(
    (store) => store.todos
  );

  const getPage = (page) => {
    if (todoList.length === 1) {
      setPage(page - 1);
      return page - 1;
    }
    return page;
  };

  const [page, setPage] = useState(Number(searchParam.get("page")) || 1);
  const total = Math.ceil(totalpages / LIMIT);

  useEffect(() => {
    dispatch(getTodosAPI(page));
    setSearchParam({ page });
  }, [page]);

  return (
    <div className="todo">
      <InputWithButton {...{page,setPage,todoList}} />

      {error && (
        <Alert title="WOW ! 404 ERROR " color="red">
          Something terrible happened! You made a mistake and there is no going
          back, your data was lost forever!
        </Alert>
      )}

      <Title align="center">Todos</Title>

      <Stack>
        {loading && (
          <LoadingOverlay color="red" visible={loading} overlayBlur={2} />
        )}
        {todoList?.map((todo) => (
          <div className="todoItems" key={todo.id}>
            <Text>{todo.id}.</Text>
            <Text>{todo.title.slice(0, 20)}</Text>
            <Button
              variant="subtle"
              color={todo.completed ? "green" : "yellow"}
              onClick={() =>
                dispatch(
                  updateTodoItem(todo.id, { completed: !todo.completed }, page)
                )
              }
            >
              {todo.completed ? "Completed" : "Pending"}
            </Button>
            <Button
              variant="light"
              color="red"
              onClick={() => dispatch(deleteTodoItem(todo.id, getPage(page)))}
            >
              Delete
            </Button>
          </div>
        ))}
      </Stack>

      <Pagination
        page={page}
        onChange={(e) => setPage(e)}
        total={total}
        withEdges
        p={"2rem"}
        color="red"
      />
    </div>
  );
};

export default Todos;
