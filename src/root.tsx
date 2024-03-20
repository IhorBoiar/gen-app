import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib/styles/styles.scss'
import { ThemeProvider } from '@mui/material'
import theme from './lib/config/theme.ts'
import Snack from "./components/box/snacks/Snack.tsx";
import Home from "./components/screens/home/Home.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <Snack />
    </ThemeProvider>
  </React.StrictMode>,
)
