import { Flex, NavLink } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getFromCloud, sendToCloud } from "../main";

const initial = getFromCloud("index") || 0;

const Navbar = () => {
  const [active, setActive] = React.useState(initial);
  const navigate = useNavigate();

  // :: This  Object have data about Navbar ::
  const links = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "/todos", name: "Todos" },
    { path: "/create", name: "Create" },
  ];

  // :: This function exexutes when user clicks on any NavLink ::
  const handleClick = (index, path) => {
    setActive(index);
    navigate(path);
    sendToCloud("index", index);
  };

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
      w="50%"
    >
      {links.map((link, index) => (
        <NavLink
          active={index === active}
          label={link.name}
          color="red"
          variant="filled"
          key={link.name}
          onClick={() => handleClick(index, link.path)}
          style={{ textAlign: "center" }}
        />
      ))}
      
    </Flex>
  );
};

export default Navbar;
