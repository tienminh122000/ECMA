import React from "react";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <div>{children}</div>;
};

export default Protect;
