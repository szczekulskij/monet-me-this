import React, {useState} from "react";
import axios from 'axios';

export const Header = (props) => {
  const [url, setUrl] = useState(0);
  
  const componentDidMount = async () =>{
    const backend_url = "http://localhost:8080/images/image"
    const res = await axios.get(backend_url, {responseType: 'blob'})
    const image_url = URL.createObjectURL(res.data)
    console.log(image_url)
    setUrl(image_url)
  }

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                  onClick={() => componentDidMount()}
                >
                  A button
                </a>{' '}
                <div class="row">
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src={url} className="img-responsive" alt="" />{" "}
                  </div>
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src={url} className="img-responsive" alt="" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

