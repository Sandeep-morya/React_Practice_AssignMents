import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Privatize = ({ children }) => {
  const { token } = useSelector((store) => store.auth);
  const {pathname}= useLocation()
  return token ? children : <Navigate to="/login" state={pathname}/>;
};

export default Privatize;
