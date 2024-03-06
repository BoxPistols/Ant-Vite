import { Row, Col, Typography } from 'antd'

const Columnsol = () => {
  const sectionAuthorInformation1 = 'Section Author Information 1'

  return (
    <div style={{ overflowX: 'auto' }}>
      <Row gutter={[16, 24]}>
        <Col>
          <Typography color="secondary">変更あり！担当部署</Typography>
          <Typography>{sectionAuthorInformation1}</Typography>
        </Col>
        <Col
          style={{
            display: 'flex',
            minWidth: 960,
            overflowX: 'auto'
          }}
        >
          <div
            style={{
              flex: '1 0 50%',
              padding: '0 12px',
              flexWrap: 'nowrap',
              minWidth: 400
            }}
          >
            <Typography color="secondary">Left Area</Typography>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Typography color="secondary">担当部署</Typography>
                <Typography>{sectionAuthorInformation1}</Typography>
              </Col>
              <Col span={12}>
                <Typography color="secondary">担当部署</Typography>
                <Typography>{sectionAuthorInformation1}</Typography>
              </Col>
            </Row>
          </div>
          <div
            style={{
              flex: '1 0 50%',
              padding: '0 12px',
              flexWrap: 'nowrap',
              minWidth: 400
            }}
          >
            <Typography color="secondary">Right Area</Typography>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                <Typography color="secondary">担当部署</Typography>
                <Typography>{sectionAuthorInformation1}</Typography>
              </Col>
              <Col span={12}>
                <Typography color="secondary">担当部署</Typography>
                <Typography>{sectionAuthorInformation1}</Typography>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Columnsol
