import React from "react";
import { selectLoggedInUser } from "./Authslice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// replace with the actual path

export default function Protected({ children }) {
  //here children is home page
  const user = useSelector(selectLoggedInUser);

  if (!user) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" replace={true} />;
  } else {
    // User is logged in, allow access to the protected route
    return children;
  }
}
