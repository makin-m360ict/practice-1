import { Card, Col, Row } from "antd"
import { useGetPostsQuery } from "../../features/api/apiSlice"

interface IPosts {
    body: string,
    id: number,
    title: string,
    sserId: number
}

export default function Posts() {
    const { data, isLoading } = useGetPostsQuery()
    return (
        <Card title="Posts" style={{ marginTop: "20px" }} bodyStyle={{ backgroundColor: "#f5f5f5"}}>
            <Row gutter={[25, 16]} >
                {
                    !isLoading && data?.map((post: IPosts) => (
                        <Col xs={24} md={12} lg={6} >
                            <Card title={`${post?.title}`} bordered={false} size="default" style={{ maxHeight: "280px", minHeight: "280px", padding: "5px" }}>
                                {post?.body.slice(0, 200)}
                            </Card>
                        </Col>
                    ))
                }

            </Row>
         </Card>
    )
}
