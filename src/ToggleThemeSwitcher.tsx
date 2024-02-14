import { Button } from 'antd'
import { useTheme } from './ThemeContext'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'

interface ToggleThemeSwitcherProps {
  colorSun?: string
  colorMoon?: string
}

// 共通スタイルを定義
const iconStyle = {
  fontSize: 18
}

const ToggleThemeSwitcher = ({
  colorSun,
  colorMoon
}: ToggleThemeSwitcherProps) => {
  const { toggleTheme, darkMode } = useTheme()

  return (
    <Button onClick={toggleTheme} type="text">
      {darkMode
        ? (
        <SunOutlined style={{ ...iconStyle, color: colorSun }} />
          )
        : (
        <MoonOutlined style={{ ...iconStyle, color: colorMoon }} />
          )}
    </Button>
  )
}

export default ToggleThemeSwitcher
