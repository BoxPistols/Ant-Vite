import { type ReactNode } from 'react'
import { Layout, Typography } from 'antd'
import SideBar from './SideBar'
import { useTheme } from '../ThemeContext'
import ToggleThemeSwitcher from '../ToggleThemeSwitcher'

interface AppProps {
  children?: ReactNode
}

const { Header, Content } = Layout

const AdminLayout = ({ children }: AppProps) => {
  const { darkMode } = useTheme()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />

      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            background: darkMode ? '#27292a' : 'lightgray'
          }}
        >
          <Typography.Title level={3} style={{ margin: 0 }}>
            Admin
          </Typography.Title>
          <ToggleThemeSwitcher colorMoon={'black'} colorSun={'white'} />
        </Header>
        <Content
          style={{
            margin: 20,
            padding: 32,
            background: 'darkgray'
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
