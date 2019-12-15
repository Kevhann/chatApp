import React from "react"
import MessageLog from "./MessageLog"
import MessagePrompt from "./MessagePrompt"
import CreateUser from "./CreateUser"
import UserList from "./UserList"
import { Container, Row, Col } from "react-bootstrap"

const Chat = () => {
  return (
    <div className="mainChat">
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
          </Col>
          <Col>
            <UserList></UserList>
          </Col>
        </Row>
        <Row>
          <Col>
            <MessagePrompt></MessagePrompt>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}
/**
 * <div className="mainChat">
      <CreateUser></CreateUser>
      <MessageLog></MessageLog>
      <MessagePrompt></MessagePrompt>
      <UserList></UserList>
    </div>
 * 
 * 
 * 
 */
export default Chat
