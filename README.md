And Design [https://ant.design/docs/](https://ant.design/docs/) のドキュメント

## Ant Design の利用方法

Vite や Next などの React プロジェクトで Ant Design の使用を開始するには、次の手順に従います。

```bash
npm install antd --save
# or
yarn add antd
```

基本的な書き方、ボタンの例。このサンプルでは、さまざまなタイプのボタンを使用しています。

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

例えば以下のように、ダークアルゴリズムを適用するには、
`<ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>...</ConfigProvider>`
と設定します。
これにより、全体のテーマがダークモードに切り替わります。

さらに、テーマを切り替えるためには

ConfigProvider の theme プロパティを動的に変更することができます。例えば、ユーザーがボタンをクリックすると、テーマがダークモードからライトモードに切り替わるような機能を実装することが可能です。

例えばこのようなコードになります

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

このコードでは、ボタンをクリックすると、テーマがダークモードとライトモードで切り替わります。

## Ant Design のカスタマイズ

Ant Design は、自分のニーズに合わせてカスタマイズすることが可能です。例えば、以下のようにスタイル変数を上書きすることで、テーマを自分好みに調整できます。

```jsx
const { override } = require("customize-cra");

module.exports = override(
  adjustStyleLoaders((rule) => {
    // 既存のruleを見つける（scssとsass）
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: "sass-resources-loader",
        options: {
          resources: ["./src/styles/theme.scss"], // ここに自分のスタイルを指定
        },
      });
    }
  }),
);
```

上記のコードでは、`customize-cra`と`sass-resources-loader`を使用して、全ての SCSS ファイルに共通のスタイルを適用しています。

Ant Design を使用すれば、自分のプロジェクトに合わせてデザインを調整しながら、エンタープライズ級の UI を効率的に開発することが可能です。詳細なカスタマイズ方法や、その他の機能については公式ドキュメンテーションをご覧ください。
