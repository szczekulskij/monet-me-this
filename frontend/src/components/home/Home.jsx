import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import StartModal from "./StartModal"
import TutorialModal from "./TutorialModal"
import {useState} from "react";
import axios from 'axios';

  // return (
  //   <header id='header'>
  //     <div className='intro'>
  //       <div className='overlay'>
  //         <div className='container'>
  //           <div className='row'>
  //             <div className='col-md-8 col-md-offset-2 intro-text'>
  //               <a
  //                 href='#features'
  //                 className='btn btn-custom btn-lg page-scroll'
  //                 onClick={() => componentDidMount()}


export default class Navigation2 extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const getImage = async (image_type) =>{

        
        const backend_url = "" // So that js doesn't scream
        if (image_type === 'monetsque'){
          const backend_url = "http://localhost:8080/images/monet/original"
        }
        if (image_type === 'monet'){
          const backend_url = "http://localhost:8080/images/monet/generated"
        }
        if (image_type === 'normal'){
          const backend_url = "http://localhost:8080/images/image"
        }
      
      
      

        const res = await axios.get(backend_url, {responseType: 'blob'})
        const image_url = URL.createObjectURL(res.data)
        console.log(image_url)
        // setUrl(image_url)
      }



      // const [url, setUrl] = this.useState(0);
      this.state = { url: false };
      const { activeItem } = this.state
  
      return (
        <>
        <Menu compact
              style={{ fontSize: "20px", width: "60%", textAlign: "center", marginTop: "50px", marginLeft: "20%", paddingLeft: "0px" }}>
              <Menu.Item header
                  name="Start"
                  onClick={this.handleItemClick}
                  style={{ fontSize: "25px", width: "75%", textAlign: "center", display: "inline-block" }} >
                  <StartModal/>
              </Menu.Item>
                
              <Menu.Item
                  name="Tutorial"
                  active={activeItem === "Monet's history"}
                  onClick={this.handleItemClick}
                  style={{ width: "25%", textAlign: "center", display: "inline-block", paddingTop: "25px" }}>
                  <TutorialModal/>
              </Menu.Item>
                
          </Menu>
          <div className="ui progress" data-percent="75" style={{width: "60%", margin: "0 0 0 0",  marginLeft: "20%", paddingTop: "0px", paddingBottom:"0px"}}>  
          <div className="bar" style={{width:"75%"}}>
            <div className="progress">Score: 4/5</div>
          </div>
        </div>
          
          <div style = {{display: "flex", overflow: "auto", paddingTop: "0px", margingTop: "0px"}}>
            <img src="img/before.jpg" style={{display: "block", width: "29.85%",  marginLeft: "auto", }}/> 
            <div style = {{borderLeft: "2px solid black", borderRight: "2px solid black"}}/>
            <img src="img/before.jpg" style={{display: "block", width: "29.85%", marginRight: "auto"}}/> 
          </div>
          <button class="ui button">Click Here</button>
          </>

      )
    }
  }