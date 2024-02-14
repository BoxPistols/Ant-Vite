import { Typography } from 'antd'

interface ContentProps {
  text?: string
  children?: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children, text = 'Hello' }) => {
  return (
    <>
      <Typography.Title level={2}>Content Component</Typography.Title>
      <Typography>{text}</Typography>
      {text === 'Hello' && <Typography>Default text is used</Typography>}
      {children}
    </>
  )
}

export default Content
