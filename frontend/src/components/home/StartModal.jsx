import React, { Component } from 'react'
import { Button, Header, Image, Modal, Popup } from 'semantic-ui-react'
import { BsFillQuestionSquareFill } from 'react-icons/bs';



const PopupExample = () => (
  <Popup 
    content="(yet to be implemented) If Hardcode mode acticated (red), we'll show you 4 paintings, and sometimes show all 4 generated by AI!"
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
  const [total, setTotal] = React.useState(0)

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
          <p style = {{padding : "0 0 0 0", margin:"0 0 0 0 "}}> Let's play a guessing game. </p>
          <p style = {{padding : "0 0 0 0", margin:"0 0 0 0 "}}> Can you distinguish between monet's original paiting and AI-generated monet-like painting? </p>
          <p> Once the game begins, click the correct painting. </p>
          <div style = {{display: "flex", overflow: "auto"}}>
            <DifficultyToggle/>
            <div>
              <PopupExample/>
            </div>
          </div>
        </Modal.Description>
        <div style = {{marginTop : "30px"}}>
          <p>Choose number of choices/guesses to be included in the game:</p>
          <Button content='10' onClick={() => setTotal(10)}/>
          <Button content='20' onClick={() => setTotal(20)}/>
          <Button content='30' onClick={() => setTotal(30)}/>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Start Game"
          labelPosition='right'
          icon='play'
          onClick={() => {setOpen(false); props.startGame(total);}}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}
export default StartModal;