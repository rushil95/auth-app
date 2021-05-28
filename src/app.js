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

export default function App() {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyles />
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/edit" component={EditProfile}/>
            </Switch>
          </Router>
        </AuthProvider>
      </AppThemeProvider>
    </>
  );
}
