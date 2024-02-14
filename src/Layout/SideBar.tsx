import { useState } from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Button, Flex, Layout, Menu, Typography } from 'antd'
import ToggleThemeSwitcher from '../ToggleThemeSwitcher'
import Link from 'antd/es/typography/Link'

const { Sider } = Layout

interface SideBarProps {
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
}

const SideBar: React.FC<SideBarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)
  const siderWidth = 200 // 折りたたまれていないときのサイドバーの幅

  return (
    <div className="sidebar">
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
        <Link href="/">
          <Typography.Title
            level={3}
            style={{
              color: 'white',
              margin: 8
            }}
          >
            LOGO
          </Typography.Title>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
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
        <ToggleThemeSwitcher />
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
    </div>
  )
}

export default SideBar
