import React, { Component } from 'react'
import { Button, Header, Image, Modal, Popup } from 'semantic-ui-react'
import { BsFillQuestionSquareFill } from 'react-icons/bs';



const PopupExample = () => (
  <Popup 
    content='Hardcore mode explenation' 
    trigger={
      <Button> 
        <BsFillQuestionSquareFill style= {{height: "20px", width: "20px"}}/>
      </Button>
      } 
  />
)




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



function StartModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Start</Button>}
    >
      <Modal.Header>Game Settings</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p> Game explenation text or whatever </p>
          <div style = {{display: "flex", overflow: "auto"}}>
            <DifficultyToggle/>
            <div>
              <PopupExample/>
            </div>
          </div>
        </Modal.Description>
        <div style = {{marginTop : "30px"}}>
          <p>Choose number of choices included in the game:</p>
          <Button content='10' />
          <Button content='20' />
          <Button content='30' />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Start Game"
          labelPosition='right'
          icon='play'
          onClick={() => {setOpen(false); props.startGame();}}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default StartModal;