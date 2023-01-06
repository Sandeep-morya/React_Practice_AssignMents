import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
  Alert,
  LoadingOverlay,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import { loginRequest } from "../Redux/auth/auth.actions";
import { Navigate, useLocation } from "react-router-dom";

function Login() {
  // const [type, toggle] = useToggle(["login", "register"]);
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((store) => store.auth);
  const {state} = useLocation();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });
  const formSubmit = (e) => {
    dispatch(loginRequest(e));
  };
  if (token) {
    return <Navigate to={state||'/'} />;
  }
  return (
    <Paper w={500} mt="xl" m="auto" p="xl" withBorder>
      {loading && <LoadingOverlay visible={loading} overlayBlur={2} />}
      {error && (
        <Alert title="WOW ! 404 ERROR " color="red">
          Credentails, which you have provided to me, That is invalid !!!
        </Alert>
      )}
      <Text size="lg" weight={500}>
        LOGIN TO CONTINUE
      </Text>

      <Group grow mb="md" mt="md">
        <Button radius="xl" leftIcon={"🤍"}>
          Google
        </Button>
        <Button radius="xl" leftIcon={"🤍"}>
          Twitter
        </Button>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(formSubmit)}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="eve.holt@reqres.in"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Enter a valid email"}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />
        </Stack>

        <Group position="right" mt="xl">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Paper>
  );
}

export default Login;
