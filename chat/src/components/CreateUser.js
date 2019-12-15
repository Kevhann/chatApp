import React, { useState, useEffect } from "react"

import { connect } from "react-redux"
import { randomColor, getCurrentTimeStamp } from "../utils/utils"
import { Modal, Form, Button, Alert, Col } from "react-bootstrap"
import { setUserName } from "../reducers/userReducer"

const CreateUser = ({ socket, login, user, setUserName }) => {
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(randomColor())
  }, [])

  const handleFormSubmit = event => {
    event.preventDefault()

    if (user.name.length < 1) {
      console.log("2short")
      return
    }

    const time = getCurrentTimeStamp()

    const message = {
      time,

      user: user.name,
      color
    }

    socket.emit("SET_NAME_TAG", message)
  }

  const handleFormChange = event => {
    setUserName(event.target.value)
  }

  return (
    <Modal
      show={login.showLogin}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to my chat application
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => handleFormSubmit(event)}>
          <Form.Row>
            <Col md={7}>
              <Form.Label>Choose nametag</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tag"
                onChange={event => handleFormChange(event)}
              />
              <Form.Text className="text-muted">Tag must be unique</Form.Text>
            </Col>
            <Form.Group as={Col} md={3} controlId="colorChoiceForm">
              <Form.Label>Current colour</Form.Label>

              <Button
                style={{ backgroundColor: color, borderColor: color }}
                onClick={event => {
                  setColor(randomColor())
                }}
              >
                Randomize
              </Button>
            </Form.Group>
          </Form.Row>
          <Form.Row style={{ paddingTop: "10px" }}>
            <Col>
              <Button
                onClick={event => {
                  handleFormSubmit(event)
                }}
              >
                Choose tag
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Alert variant="warning" show={login.showAlert}>
          Name already in use
        </Alert>
      </Modal.Body>
    </Modal>
  )
}
const mapStateToProps = state => ({
  socket: state.socketReducer,
  login: state.loginReducer,
  user: state.userReducer
})

const mapDispatchToProps = { setUserName }

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
