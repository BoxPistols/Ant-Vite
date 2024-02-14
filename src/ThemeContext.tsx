// ThemeContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeContextType {
  darkMode: boolean
  toggleTheme: () => void
}

// テーマコンテキストの作成 (初期値はundefined) 型はThemeContextType https://ja.react.dev/reference/react/useContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// テーマコンテキストを使用するためのカスタムフック
export const useTheme = () => {
  const context = useContext(ThemeContext)
  // テーマコンテキストが存在しない場合はエラーをスロー
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// テーマプロバイダーを作成
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // ダークモードの状態を管理
  const [darkMode, setDarkMode] = useState(false)

  // ダークモードの切り替え
  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    // テーマコンテキストを使用して、ダークモードの状態と切り替え関数を提供
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
