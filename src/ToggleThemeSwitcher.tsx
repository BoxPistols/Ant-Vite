// ToggleThemeSwitcher.tsx
import { Button } from 'antd'
import { useTheme } from './ThemeContext'

const ToggleThemeSwitcher = () => {
  const { toggleTheme } = useTheme()
  const { darkMode } = useTheme()

  return (
    <Button onClick={toggleTheme} size="small" type="text">
      {darkMode ? '🌞' : '🌜'}
    </Button>
  )
}

export default ToggleThemeSwitcher
