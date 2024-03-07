import { Row, Col, Card } from 'antd'

const { Meta } = Card

const Columns = () => {
  return (
    <Row
      gutter={[16, 16]}
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        // justifyContent: 'center'
        overflowX: 'auto',
        width: '100%'
      }}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <Col
          key={index}
          span={6}
          style={{
            maxWidth: 320
            // minWidth: 240
          }}
        >
          <Card>
            <Meta
              title={`カード ${index + 1} タイトル`}
              style={{
                marginBottom: 8,
                backgroundColor: 'lightgreen',
                padding: '4px 16px'
              }}
            />
            <Row gutter={[8, 4]}>
              <Col span={12}>
                <Card style={{ backgroundColor: 'lightcoral' }} />
              </Col>
              <Col span={12}>
                <Card style={{ backgroundColor: 'lightcoral' }} />
              </Col>
            </Row>
            <Card style={{ backgroundColor: 'lightblue', marginTop: 8 }} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Columns
