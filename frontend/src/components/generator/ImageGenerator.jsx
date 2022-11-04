import React, { Component , useState, useEffect} from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';
var FormData = require('form-data');

class ImageGenerator extends Component {

  state = {
    beforeImage : "../img/before.jpg",
    afterImage : "../img/after.jpg",
    file : 0,
  }

  setFile = (fil) => {
    this.setState({file : fil})
  }

  setBeforeImage = (img) => {
    this.setState({beforeImage : img})
  }

  generateAndSetAfterImage = async (image_type, url_nr) => {
    // First send call to Python API to generate image and save it as temp.jpg in /images/generated directory
    let generate_backend_url = "http://127.0.0.1:5000/generate/image/monet" 
    const response = await axios.post(
      generate_backend_url, 
      {'image' : this.state.file}, 
      { headers: 
        // {'responseType': 'arraybuffer',
        {responseType: "bufferarray",
        'Content-Type': 'multipart/form-data'}
      }
    )
    console.log("response.data of 1st response:", response.data)
    let get_backend_url = "http://localhost:8080/images/generated"
    const res = await axios.get(get_backend_url, {responseType: 'blob'})
    const image_url = await URL.createObjectURL(res.data)
    console.log("res.data of 2nd response:", res.data)
    this.setState({afterImage : image_url})
  }

  render() {
    return ( 
    <div>
      <h1 style = {{ width: "100%", textAlign: "center", paddingTop: "20px", height: "80px"}}> Monet's Image Generator </h1>
      <div style = {{margin: "auto", width: "40%"}}>
          <img src={this.state.beforeImage} style = {{width: "40%"}}/>
          <img src="../img/arrow.png" style = {{width: "20%", paddingBottom : "10%"}}/>
          <img src={this.state.afterImage} style = {{width: "40%"}}/>
      </div>

      <div style = {{margin: "auto", width: "30%", paddingTop: "30px"}}>
        <div class="ui input" style = {{margin: "auto", padding: "0 0 0 0", width: "100%"}}>
          <UploadModal 
          setFile = {this.setFile}
          setBeforeImage = {this.setBeforeImage}
          generateAndSetAfterImage = {this.generateAndSetAfterImage}
          />
        </div>
      </div>
    </div>
     );
  }
}



// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

function UploadModal(props) {
  const [open, setOpen] = useState(false)
  // const [image, setImages] = useState()
  const [imageURL, setimageURL] = useState("https://react.semantic-ui.com/images/wireframe/image-square.png")


  function onImageChange(e) {
    let file = e.target.files[0]
    let newImageURL = URL.createObjectURL(file)
    setimageURL(newImageURL)
    console.log("imageURL:", imageURL)
    props.setFile(file)
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
        <Image size='medium' src={imageURL} wrapped />
        <Modal.Description>
        <input name="image" type="file" accept="image/*" onChange={onImageChange}/>
          <p>Would you like to upload this image?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button positive onClick={() => {
          setOpen(false); 
          props.setBeforeImage(imageURL);
          props.generateAndSetAfterImage(imageURL);
          }}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default ImageGenerator;