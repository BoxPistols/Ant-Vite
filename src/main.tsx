import React from 'react'
import ReactDOM from 'react-dom/client'
import ToggleTheme from './ToggleTheme.tsx'
import './index.css'
import App from './App.tsx'
import ToggleThemeDemo from './ToggleThemeDemo.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToggleThemeDemo />
    <ToggleTheme />
  </React.StrictMode>
)
