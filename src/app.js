import React from 'react'
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
            <Route exact path="/" render={() => <Login />}></Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AppThemeProvider>
    </>
  )
}
