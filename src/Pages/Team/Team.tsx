import { Button, Card, Col, Row, Space } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { removeFromTeam } from "../../features/makeTeam/teamSlice"

export default function Team() {
  const data = useSelector((state: any) => state.team.team)
  const dispatch = useDispatch()
  return (
    <>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}  >
        {
          data?.map((member: any) => (
            <Col xs={24} md={12} lg={6} >
              <Card title={`${member?.name}`} bordered={false} headStyle={{
                backgroundColor: "#f0f0f0", color: "black"
              }} bodyStyle={{ backgroundColor: "#595959", color: "white" }}>
                <p>{member?.username}</p>
                <p>{member?.website}</p>
                <Button onClick={() => dispatch(removeFromTeam(member?.id))}>Remove</Button>
              </Card>
            </Col>
          ))
        }
      </Row>
    </ >
  )
}
