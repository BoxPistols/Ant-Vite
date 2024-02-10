/**
https://ant.design/docs/react/customize-theme
 */

import { ConfigProvider, Space, Button, theme } from "antd";

const App: React.FC = () => (
  
  <ConfigProvider
    theme={{
      algorithm: theme.compactAlgorithm,
      token: {
        // Seed Token
        colorPrimary: "#00b96b",
        borderRadius: 2,
        // Alias Token
        colorBgContainer: "#f6ffed",
      },
    }}

  >
    <Space>
      <Button>Default Button</Button>
      <Button type="primary">Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
  </ConfigProvider>
);

export default App;
