import React from "react";
import { useSelector } from "react-redux";
import Home from "../Containers/Home/Home/Home";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  if (isLoggedIn === "true") return <Home />;
  if (isLoggedIn === "false") return <Navigate to="/auth" />;
};
export default ProtectedRoute;
