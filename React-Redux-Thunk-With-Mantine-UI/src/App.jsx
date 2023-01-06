import { Box, Flex, Button } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { loginReset } from "./Redux/auth/auth.actions";
import Routes from "./Routes";

const App = () => {
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    token ? dispatch(loginReset()) : navigate("/login");
  };
  return (
    <Box w="80%" m="auto" style={{position:'relative'}}>
      <Flex
        gap="xl"
        justify="space-between"
        align="flex-start"
        direction="row"
        bg={'red'}
        p='lg'
        w='parent'

        style={{position:'sticky',width:'100%',top:0,left:0,zIndex:2,borderRadius:'.5rem'}}
      >
        <Navbar />
        <Button onClick={handleClick} color="red" variant="light">
          {token ? "Logout" : "Login"}
        </Button>
      </Flex>
      <Routes/>
    </Box>
  );
};

export default App;
