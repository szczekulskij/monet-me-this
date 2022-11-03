import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function GameFinishModal(props) {
    var messages = {
        "great" : "Woooah. You are amazing at this, with you in this world AI doesn't seem so terrifying anymore.",
        "medium" : "Well done. This a great score - but I know you can do better. Wanna try again ?",
        "bad" : "You make me feel proud (of AI). Please try again, I'm sure you can do better!"
    }
    const pct_score = props.score/props.total * 100
    console.log("pct_score:", pct_score)



  return (
    <Modal
      basic
      onClose={() => props.setOpen(false)}
      onOpen={() => props.setOpen(true)}
      open={props.open}
      size='small'
    >
      <Header icon>
        <Icon name='game' />
        Game finished
      </Header>
      <Modal.Content>
        <center>
            {pct_score >= 80 && <p>{messages["great"]}</p>}
            {(pct_score >= 50 && pct_score < 80) && <p>{messages["medium"]}</p>}
            {pct_score < 50 && <p>{messages["bad"]}</p>}
        </center>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => {props.setOpen(false);}}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => {props.setOpen(false); props.startGame(20);}}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default GameFinishModal
