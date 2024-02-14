export const colors = {
  common: {
    text: '#3a4046',
    primary: '#2e75bc',
    bg: '#fff'
  },
  dark: {
    text: '#fff',
    primary: '#25a88b',
    bg: '#333'
  },
  light: {
    text: '#3a4046',
    primary: '#2e75bc',
    bg: '#fff'
  }
}
// ダークモードとライトモードのテーマ設定
export const darkTheme = {
  token: {
    colorPrimary: colors.dark.primary,
    colorText: colors.dark.text,
    colorBg: colors.dark.bg
  }
}

export const lightTheme = {
  token: {
    colorPrimary: colors.light.primary,
    colorText: colors.light.text,
    colorBg: colors.light.bg
  }
}
