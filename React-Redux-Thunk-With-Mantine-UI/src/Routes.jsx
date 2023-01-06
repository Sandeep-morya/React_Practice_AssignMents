import { Routes, Route } from "react-router-dom";
import { Home, Create, Login, Posts, Todos, Users, Error } from "./Pages";

import React from "react";
import Privatize from "./Components/Privatize";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route
        path="/create"
        element={
          <Privatize>
            <Create />
          </Privatize>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/posts"
        element={
          <Privatize>
            <Posts />
          </Privatize>
        }
      />
      <Route
        path="/todos"
        element={
          <Privatize>
            <Todos />
          </Privatize>
        }
      />
      <Route
        path="/users"
        element={
          <Privatize>
            <Users />
          </Privatize>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
