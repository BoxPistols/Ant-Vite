import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './Layout/AdminLayout'
import { useTheme } from './ThemeContext'
import { darkTheme, lightTheme } from './util/theme'
import Content from './Layout/Content'
import Home from './Pages/Home'
import Dashboard from './Pages/DashBoard'
import Columns from './Pages/Columns'

const App = () => {
  const { darkMode } = useTheme()

  // 現在のテーマモードに応じたテーマ設定を選択
  const currentTheme = darkMode ? darkTheme : lightTheme

  return (
    <ConfigProvider theme={currentTheme}>
      <AdminLayout>
        <Content>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/columns" element={<Columns />} />
          </Routes>
        </Content>
      </AdminLayout>
    </ConfigProvider>
  )
}

export default App
