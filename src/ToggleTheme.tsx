/**
https://ant.design/docs/react/customize-theme
*/

import {
  ConfigProvider,
  Space,
  Button,
  theme,
  Row,
  Typography,
  Col,
  Flex
} from 'antd'

import React, { useState } from 'react'

const ToggleTheme: React.FC = () => {
  const [changeMode, setChangeMode] = useState(false)

  const switchTheme = () => {
    setChangeMode(!changeMode)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: changeMode ? theme.compactAlgorithm : theme.defaultAlgorithm,
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,
          // Alias Token
          colorBgContainer: '#f6ffed'
        }
      }}
    >
      <Typography.Title level={1}>Ant Design</Typography.Title>
      <Flex vertical gap={24}>
        <Row gutter={16}>
          <Col>
            <Space>
              <Button
                onClick={switchTheme}
                type={!changeMode ? 'dashed' : 'primary'}
              >
                {!changeMode ? 'to compactAlgorithm' : 'to defaultAlgorithm'}
              </Button>
            </Space>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col>
            <Space>
              <Button>Default Button</Button>
              <Button type="primary">Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <Button type="link">Link Button</Button>
            </Space>
          </Col>
        </Row>
      </Flex>
    </ConfigProvider>
  )
}

export default ToggleTheme
