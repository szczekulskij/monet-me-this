import React, { Component } from 'react'
import { Button, Header, Image, Modal, Popup } from 'semantic-ui-react'
import { BsFillQuestionSquareFill } from 'react-icons/bs';

function TutorialModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Tutorial</Button>}
    >
      <Modal.Header>Tutorial</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p> Here explaining the game details </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
export default TutorialModal;