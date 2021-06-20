import React from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Profile from "./pages/profile";
import AppThemeProvider from "./theme/ThemeProvider";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import EditProfile from "./pages/edit";
import UserDataProvider from "./context/UserDataProvider";

export default function App() {
  console.log("hi");
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <>
      <Router>
        <AppThemeProvider>
          <GlobalStyles />
          <AuthProvider>
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <UserDataProvider>
                <ProtectedRoute exact path="/" component={Profile} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <ProtectedRoute exact path="/edit" component={EditProfile} />
              </UserDataProvider>
            </Switch>
          </AuthProvider>
        </AppThemeProvider>
      </Router>
    </>
  );
}
