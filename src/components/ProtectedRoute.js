import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedRoute({ component: Component, ...restProps }) {
  const auth = useAuth();
  
  return auth.currentUser ? (
    <Route {...restProps} component={Component} />
  ) : (
    <Redirect to="/login" />
  );
}
