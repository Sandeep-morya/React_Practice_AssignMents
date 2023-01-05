import { Routes, Route } from "react-router-dom";
import { Home, Create, Login, Posts, Todos } from "./Pages";

import React from "react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default AllRoutes;
