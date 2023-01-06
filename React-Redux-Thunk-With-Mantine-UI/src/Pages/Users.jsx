import { Paper, Text, LoadingOverlay, SimpleGrid, Card,Image,Title } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAPI } from "../Redux/users/users.actions";
import { cardStyles } from "../styles/cardStyle";

const Users = () => {
  const { loading, error, usersList} = useSelector(
    (store) => store.users
  );
  const dispatch = useDispatch();
  const { classes } = cardStyles();

  React.useEffect(() => {
    if (!usersList.length) {
      dispatch(getUsersAPI());
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
      <Title align='center'>Users</Title>
      <SimpleGrid cols={3}>
        {usersList.map((user) => (
          <Card key={user.id}>
            <Paper withBorder radius="md" className={classes.card}>
             
                <Image
                  radius="md"
                  src={user.avatar}
                  alt={user.title}
                  height={225}
                  width={225}
                />
              <Text size="xl" weight={500} mt="md">
                {user.first_name} {user.last_name}
              </Text>
              <Text size="sm" mt="sm" color="dimmed">
                {user.email}
              </Text>
            </Paper>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Users;
