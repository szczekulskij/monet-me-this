import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function UploadModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image-square.png' wrapped />
        <Modal.Description>
          <p>Would you like to upload this image?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

const ImageGenerator = (props) => {
    return ( 
    <div>
      <h1 style = {{ width: "100%", textAlign: "center", paddingTop: "20px", height: "80px"}}> Monet's Image Generator </h1>
      <div style = {{margin: "auto", width: "40%"}}>
          <img src="../img/before.jpg" style = {{width: "40%"}}/>
          <img src="../img/arrow.png" style = {{width: "20%", paddingBottom : "10%"}}/>
          <img src="../img/after.jpg" style = {{width: "40%"}}/>
      </div>

      <div style = {{margin: "auto", width: "20%", paddingTop: "30px"}}>
        <div class="ui input" style = {{margin: "auto", width: "100%"}}>
          <input type="file" placeholder="Search..."/>
          <button class="ui button">Upload</button>
        </div>
      </div>
    </div>
     );
}
 
export default ImageGenerator;