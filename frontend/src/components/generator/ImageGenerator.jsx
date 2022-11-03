import React, { Component , useState, useEffect} from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import axios from 'axios';
var FormData = require('form-data');

class ImageGenerator extends Component {

  state = {
    beforeImage : "../img/before.jpg",
    afterImage : "../img/after.jpg",
    file : 0,
    base64String : ""
  }

  setFile = (fil) =>
  this.setState({file : fil})

  setBeforeImage = (img) => {
    this.setState({beforeImage : img})
  }

//   _imageEncode = (arrayBuffer) => {
//     let u8 = new Uint8Array(arrayBuffer)
//     let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
//     let mimetype="image/jpeg"
//     return "data:"+mimetype+";base64,"+b64encoded
// }


  generateAndSetAfterImage = async (imageURL) => {
    const backend_url = "http://127.0.0.1:5000/generate/image/monet" 
    const data = new FormData();
    data.append('image', imageURL);
    // const res = await axios.post(backend_url, {'image' : this.state.file}, { headers: {'Content-Type': 'multipart/form-data'}})
    const res = await axios.post(
      backend_url, 
      {'image' : this.state.file}, 
      { headers: 
        // {'responseType': 'arraybuffer',
        {responseType: "bufferarray",
        'Content-Type': 'multipart/form-data'}
      }
    )
    
    const buffer = Buffer.from(res.data, 'base64');
    const image = this._imageEncode(res.data)

    console.log(res.data);
    console.log(image);
    console.log(buffer);

    const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
    console.log("base64String: ",base64String)
    this.setState({base64String : base64String})



    // const newImageURL = await URL.createObjectURL(this._imageEncode(res.data))
    // this.setState({afterImage : newImageURL})
  }








  render() {
    return ( 
    <div>
      <h1 style = {{ width: "100%", textAlign: "center", paddingTop: "20px", height: "80px"}}> Monet's Image Generator </h1>
      <div style = {{margin: "auto", width: "40%"}}>
          <img src={this.state.beforeImage} style = {{width: "40%"}}/>
          <img src="../img/arrow.png" style = {{width: "20%", paddingBottom : "10%"}}/>
          {/* <img src={this.state.afterImage} style = {{width: "40%"}}/> */}
          <img src={`data:image/jpg;base64,${this.state.base64String}`} alt="" style = {{width: "40%"}}/>
          {/* <img src={`data:image/png;base64,${this.state.base64String}`} alt=""/> */}
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