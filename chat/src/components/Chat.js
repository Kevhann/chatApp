import React from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import UserList from "./UserList"
import { Container, Row, Col } from "react-bootstrap"

const Chat = () => {
  return (
    <Container style={{ marginLeft: 0, marginRight: 0 }}>
      <CreateUser></CreateUser>
      <Row style={{ marginLeft: 0, marginRight: 0 }}>
        <Col
          style={{
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <MessageLog></MessageLog>
          <MessagePrompt></MessagePrompt>
        </Col>
        <Col>
          <UserList></UserList>
        </Col>
      </Row>
    </Container>
  )
}

export default Chat
