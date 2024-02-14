import { Typography } from 'antd'

interface DashboardProps {
  text?: string
  children?: React.ReactNode
}

const Dashboard: React.FC<DashboardProps> = ({ text, children }) => {
  return (
    <>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Typography>Dashboard content {text}</Typography>
      {children}
    </>
  )
}

export default Dashboard
