# Ant Design

## [https://ant.design/docs/](https://ant.design/docs/) のドキュメント

## Verce https://ant-vite.vercel.app/


### 公式

[Ant Design - The world's second most popular React UI framework](https://ant.design/)

- [Design](https://ant.design/docs/spec/introduce)
- [Develop](https://ant.design/docs/react/introduce)
- [Components](https://ant.design/components/overview/)

## Ant Design の利用方法

Vite や Next などの React プロジェクトで Ant Design の使用を開始する場合

```bash
npm install antd --save
# or
yarn add antd
```

基本的な書き方、ボタンの例。このサンプルではさまざまなタイプのボタンを使用しています。

```bash
import { Button } from 'antd';

const App = () => (
  <>
    <Button>Default Button</Button>
    <Button type="primary">Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

export default App;
```

## Antd Theme

Ant Design ではテーマのカスタマイズをサポートし、ユーザーは自分のブランドに合わせたカラースキームやフォントスタイルを適用することができます。

Ant Design は、デフォルトで 3 つのプリセットアルゴリズムを提供します:

1. デフォルトアルゴリズム theme.defaultAlgorithm
1. ダークアルゴリズム theme.darkAlgorithm
1. コンパクトアルゴリズム theme.compactAlgorithm

ConfigProvider 内の theme の algorithm プロパティを変更することで、アルゴリズムを切り替えることができます。

例えば以下のように、ダークアルゴリズムを適用するには

```tsx
<ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>...</ConfigProvider>
```

と設定します。これにより、全体のテーマがダークモードに切り替わります。<br/>
さらに、テーマを切り替えるためにはConfigProvider の theme プロパティを動的に変更することができます。

例えば、ユーザーがボタンをクリックすると、テーマがダークモードからライトモードに切り替わるような機能を実装することが可能です。例えばこのようなコードになります。

```jsx
import { ConfigProvider, Button } from "antd";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Button onClick={switchTheme}>テーマを切り替える</Button>
    </ConfigProvider>
  );
};

export default App;
```

ただ、この状態ですとボタン自体の色が変わることは分かりますが、期待していたような背景色も全て変わるような挙動ではありませんでした。

そこで、もう一つのテーマ`defaultAlgorithm`を設定し、Buttonの大きさが変わる事を確認します。

<details>

<summary>Switch Theme</summary>

### You can add a header

```tsx
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
                type={!changeMode ? 'primary' : 'dashed'}
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
```

</details>

## DarkMode Toggle

[Basic Layout / DarkMode Toggle / theme.ts](https://shrtm.nu/skT)

- 今回のコミットで、いわゆる管理画面のようなベーシックなレイアウトを組みました
  - サイドナビの幅はToggle
  - レイアウトのメインにコンテンツコンポーネントの作成

- カラーテーマ、DakrMode切り替えの基盤設置
  - 簡単なテーマファイルの作成
  - テーマプロバイダの作成
  - トリガーとなるテーマ切り替えアイコンの設定
  - 現状のデザインにLight/DarkのテーマToggleの反映
  - サイドナビ背景など、切り替えに影響されない固定のカラーも設定

![](https://shrtm.nu/skW)

---

## Router設定

- yarn add react-router-dom@6
