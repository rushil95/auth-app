import React from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Home from './pages/home'
import AppThemeProvider from './theme/ThemeProvider'

export default function App() {
  return (
    <>
      <AppThemeProvider>
        <GlobalStyles/>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Signup />}></Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AppThemeProvider>
    </>
  )
}
