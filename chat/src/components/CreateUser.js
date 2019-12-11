import React from "react"

import { connect } from "react-redux"
import { randomColor, getCurrentTimeStamp } from "../utils/utils"
import { Modal, Form, Button, Alert } from "react-bootstrap"

const CreateUser = ({ socket, login, setShowLogin, setShowAlert }) => {
  console.log("login:", login)
  const color = randomColor()
  let namePlaceHolder = ""

  const handleFormSubmit = event => {
    event.preventDefault()

    if (namePlaceHolder.length < 1) {
      console.log("2short")
      return
    }

    const time = getCurrentTimeStamp()
    const content = "Joined the chat"
    const message = {
      content,
      time,
      type: "USER_JOIN",
      user: namePlaceHolder,
      color
    }

    socket.emit("SET_NAME_TAG", message)
  }

  const handleFormChange = event => {
    namePlaceHolder = event.target.value
  }

  return (
    <Modal
      show={login.showLogin}
      size="lg"
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
          <Form.Group>
            <Form.Label>Choose nametag</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter tag"
              onChange={event => handleFormChange(event)}
            />
            <Form.Text className="text-muted">Tag must be unique</Form.Text>
          </Form.Group>
        </Form>
        <Alert variant="warning" show={login.showAlert}>
          Name already in use
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={event => handleFormSubmit(event)}>Choose tag</Button>
      </Modal.Footer>
    </Modal>
  )
}
const mapStateToProps = state => ({
  socket: state.socketReducer,
  login: state.loginReducer
})

export default connect(mapStateToProps)(CreateUser)
