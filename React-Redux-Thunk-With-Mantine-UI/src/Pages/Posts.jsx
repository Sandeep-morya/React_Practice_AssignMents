import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAPI } from "../Redux/posts/posts.actions";
import { Card, SimpleGrid, LoadingOverlay, Alert, Text,Paper, Title } from "@mantine/core";
import { cardStyles } from "../styles/cardStyle";

const Posts = () => {
  const { loading, error, postsList } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const {classes} = cardStyles();
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
        <Title mt='2rem' align='center'>Posts</Title>
      <SimpleGrid cols={4}>
        {postsList?.map((post) => (
          <Card key={post.id} >
            <Paper withBorder radius="md" className={classes.card}>
              <Title order={4} >{post.id}</Title>
              <Text size="xl"  mt="md">
                {post.title.slice(0,10)}
              </Text>
              <Text size="sm" mt="sm" color="dimmed">
                {post.body.slice(0,100)}
              </Text>
            </Paper>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Posts;
