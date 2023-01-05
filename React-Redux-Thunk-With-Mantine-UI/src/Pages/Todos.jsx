import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAPI } from "../Redux/todos/todos.actions";
import { Card, SimpleGrid, LoadingOverlay, Alert, Text } from "@mantine/core";

const Todos = () => {
  const { loading, error, todoList } = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!todoList.length) {
      dispatch(getTodosAPI());
    }
  }, []);

  return (
    <div>
      {loading && <LoadingOverlay visible={loading} overlayBlur={2} />}
      {error && (
        <Alert title="WOW ! 404 ERROR " color="red">
          Something terrible happened! You made a mistake and there is no going
          back, your data was lost forever!
        </Alert>
      )}
      <SimpleGrid cols={3}>
        {todoList?.map((post) => (
          <Card key={post.id}>
            <Text>{post.title}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Todos;
