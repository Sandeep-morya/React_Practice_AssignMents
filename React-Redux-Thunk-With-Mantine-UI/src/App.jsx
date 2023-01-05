import { Box, Flex, Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Routes from "./Routes";

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box w='80%' m='auto'>
      <Flex
        gap="xl"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="nowrap"
      >
        <Navbar />
        <Button onClick={handleClick}>Login</Button>
      </Flex>
      <Routes />
    </Box>
  );
};

export default App;
