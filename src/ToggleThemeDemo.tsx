import { ConfigProvider, Button, theme } from 'antd'
import { useState } from 'react'

const ToggleThemeDemo = () => {
  const [darkMode, setDarkMode] = useState(false)

  const switchTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <Button onClick={switchTheme}>テーマを切り替える</Button>
    </ConfigProvider>
  )
}

export default ToggleThemeDemo
