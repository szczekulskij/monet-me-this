import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class DifficultyToggle extends Component {
  state = {}
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <Button toggle active={!active} onClick={this.handleClick} style={{backgroundColor: "#FF6347"}}>
        Hardcode Mode
      </Button>
    )
  }
}



function StartModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Start</Button>}
    >
      <Modal.Header>Game Settings</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p> Game explenation text or whatever </p>
          <DifficultyToggle></DifficultyToggle>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Start Game"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default StartModal;