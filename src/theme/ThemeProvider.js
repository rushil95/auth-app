import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import LightTheme from './light'
import DarkTheme from './dark'

function AppThemeProvider({ children }) {
  const [theme, setTheme] = useState(LightTheme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppThemeProvider