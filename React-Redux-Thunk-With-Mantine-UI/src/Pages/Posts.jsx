import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAPI } from "../Redux/posts/posts.actions";
import { Card, SimpleGrid, LoadingOverlay, Alert, Text } from "@mantine/core";

const Posts = () => {
  const { loading, error, postsList } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!postsList.length) {
      dispatch(getPostsAPI());
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
        {postsList?.map((post) => (
          <Card key={post.id}>
            <Text>{post.title}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Posts;
