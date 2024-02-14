import { useState } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Button, Flex, Layout, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
// import Home from '../Pages/Home'

const { Sider } = Layout

interface SideBarProps {
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
}

const SideBar: React.FC<SideBarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)
  const siderWidth = 200 // 折りたたまれていないときのサイドバーの幅

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={siderWidth}
        style={{
          padding: 8,
          minHeight: '100vh'
        }}
      >
        <Typography.Title
          level={3}
          style={{
            color: 'white',
            margin: 8,
            fontSize: collapsed ? 16 : 24
          }}
        >
          <Link to="/">LOGO</Link>
        </Typography.Title>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to="/dashboard">Dashoard</Link>
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to="/home">Home</Link>
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'nav 4'
            }
          ]}
        />
      </Sider>

      <Flex
        style={{
          position: 'absolute',
          left: 8,
          bottom: 8,
          color: 'white'
        }}
        align="center"
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          size="large"
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          style={{
            color: 'white'
          }}
        />
      </Flex>
    </>
  )
}

export default SideBar
