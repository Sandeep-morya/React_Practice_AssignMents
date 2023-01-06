import { Flex } from "@mantine/core";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // :: This  Object have data about Navbar ::
  const links = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "/todos", name: "Todos" },
    { path: "/users", name: "Users" },
    { path: "/create", name: "Create" },
  ];

  // :: This function returns Styles ::

  const handleClick = ({ isActive }) =>{
    const style={
      textDecoration:'none',
      backgroundColor:'rgba(245,245,245)',
      padding:'.3rem 1rem',
      borderRadius:'.2rem'
    }
    return isActive ? {...style, color: "red" } : {...style, color: "black" };
  }
    

  return (
    <Flex
      direction={{ base: "column", sm: "row" }}
      gap={{ base: "sm", sm: "lg" }}
      justify={{ sm: "center" }}
    >
      {links.map((link) => (
        <NavLink key={link.name} style={handleClick} to={link.path}>
          {link.name}
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navbar;
