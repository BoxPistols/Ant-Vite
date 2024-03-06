import { Row, Col, Typography } from 'antd'

interface ColumnsProps {
  children?: React.ReactNode
}

const Columns: React.FC<ColumnsProps> = ({}) => {
  const sectionAuthorInformation1 = 'ここにセクション1の情報を記述'
  const departmentAuthorInformation1 = 'ここに部署1の情報を記述'
  const sectionAuthorInformation2 = 'ここにセクション2の情報を記述'
  const departmentAuthorInformation2 = 'ここに部署2の情報を記述'

  return (
    <div>
      <Row gutter={[16, 24]}>
        {/* Left 1 */}
        <Col span={6}>
          <Typography color="secondary">担当部署</Typography>
          <Typography>{sectionAuthorInformation1}</Typography>
        </Col>
        <Col span={6}>
          <Typography color="secondary">担当部署B</Typography>
          <Typography>{departmentAuthorInformation1}</Typography>
        </Col>
        <Col span={6}>
          <Typography color="secondary">担当部署C</Typography>
          <Typography>{sectionAuthorInformation2}</Typography>
        </Col>
        <Col span={6}>
          <Typography color="secondary">担当部署D</Typography>
          <Typography>{departmentAuthorInformation2}</Typography>
        </Col>
      </Row>
    </div>
  )
}

export default Columns
