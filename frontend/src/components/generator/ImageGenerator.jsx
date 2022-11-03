import React, { Component , useState, useEffect} from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

function UploadModal() {
  const [open, setOpen] = useState(false)
  // const [image, setImages] = useState()
  const [imageURL, setimageURL] = useState("https://react.semantic-ui.com/images/wireframe/image-square.png")

  // useEffect(() =>{
  //   let newImageURL = URL.createObjectURL(image)
  //   setimageURL(newImageURL)
  // }, [image])




  function onImageChange(e) {
    let file = e.target.files[0]
    let newImageURL = URL.createObjectURL(file)
    setimageURL(newImageURL)
    console.log("imageURL:", imageURL)

  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style = {{width: "100%", fontSize: "22px"}}>Upload Image!</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content image>
      {/* <input type="file" multiple accept="image/*" onChange={setOpen(false)} /> */}
        <Image size='medium' src={imageURL} wrapped />
        <Modal.Description>
        <input type="file" accept="image/*" onChange={onImageChange}/>
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




class ImageGenerator extends Component {
  render() {
    return ( 
    <div>
      <h1 style = {{ width: "100%", textAlign: "center", paddingTop: "20px", height: "80px"}}> Monet's Image Generator </h1>
      <div style = {{margin: "auto", width: "40%"}}>
          <img src="../img/before.jpg" style = {{width: "40%"}}/>
          <img src="../img/arrow.png" style = {{width: "20%", paddingBottom : "10%"}}/>
          <img src="../img/after.jpg" style = {{width: "40%"}}/>
      </div>

      <div style = {{margin: "auto", width: "30%", paddingTop: "30px"}}>
        <div class="ui input" style = {{margin: "auto", padding: "0 0 0 0", width: "100%"}}>
          {/* <input type="file" placeholder="Search..."/>
          <button class="ui button">Upload</button> */}
          <UploadModal></UploadModal>
        </div>
      </div>
    </div>
     );
  }
}
 
export default ImageGenerator;