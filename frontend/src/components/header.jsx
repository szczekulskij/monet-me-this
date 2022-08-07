import React from "react";
import axios from 'axios';

// const componentDidMount = () => {
//   fetch("http://localhost:8080/fileDownload/new",
//   // fetch('http://147.161.237.22:8080/fileDownload/randomNonMonet',
//   {headers: {
//     'Content-Type': 'image/jpeg'
//   },})

//   // fetch("https://api.github.com/users/szczekulskij")
//   // fetch("http://147.161.237.22:8080")
//   .then(console.log("lol"))
//   .then(response => response.blob())
//   .then(response => console.log(response));
// }

const componentDidMount = () =>{
  // const url = "http://localhost:8080/fileDownload/new"
  const url = "http://localhost:8080/fileDownload/randomNonMonet"
  axios.get(url,{responseType: 'blob'})
  .then(res => console.log(res))
  // .then(res => console.log(res.data))
}

// const componentDidMount = () => {
//   fetch("http://147.161.237.22:8080/fileDownload")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         console.log(result)
//         console.log(result.items)
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         console.log(error)
//       }
//     )
// }


// const componentDidMount = () => {
//   fetch('http://147.161.237.22:8080/fileDownload')
//   .then(response => response.blob())
//   .then(imageBlob => {
//       // Then create a local URL for that image and print it 
//       const imageObjectURL = URL.createObjectURL(imageBlob);
//       console.log(imageObjectURL);
//   });
// }


export const Header = (props) => {
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
                  onClick={componentDidMount}
                >
                  A button
                </a>{' '}
                <div class="row">
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                  </div>
                  <div class="column">
                    {/* <img className="profile-photo" src={require("img/about.jpg")} alt={"Carlie Anglemire"}/> */}
                    <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
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

