import AdminLayout from './Layout/AdminLayout'
import { ConfigProvider } from 'antd'
import { useTheme } from './ThemeContext'
import { darkTheme, lightTheme } from './util/theme'
import Content from './Layout/Content'

const App = () => {
  const { darkMode } = useTheme()

  // 現在のテーマモードに応じたテーマ設定を選択
  const currentTheme = darkMode ? darkTheme : lightTheme

  return (
    <ConfigProvider theme={currentTheme}>
      <AdminLayout>
        <Content />
      </AdminLayout>
    </ConfigProvider>
  )
}

export default App
