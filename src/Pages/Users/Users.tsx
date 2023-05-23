import { Card, Col, Row } from "antd"
import { useGetUserQuery } from "../../features/api/apiSlice"
import SingleCard from "../../Components/SingleCard"



export default function Users() {

  const {data,isError,isLoading} = useGetUserQuery()
   
  return (
    <Card title="Users list">
    <Row>
      <Col xs={24}  >
        <SingleCard/>
      </Col>
    </Row>

    </Card>
  )
}
