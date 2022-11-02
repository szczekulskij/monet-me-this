import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import StartModal from "./StartModal"
import TutorialModal from "./TutorialModal"
import {useState} from "react";
import axios from 'axios';

export default class Navigation2 extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    updateImage = async (image_type, url_nr) => {
      let backend_url = "" // So that JS doesn't complain
      if (image_type == 'monetsque'){
        backend_url = "http://localhost:8080/images/monet/original"
      }
      if (image_type == 'monet'){
        backend_url = "http://localhost:8080/images/monet/generated"
      }
      if (image_type == 'normal'){
        backend_url = "http://localhost:8080/images/image"
      }
  
      const res = await axios.get(backend_url, {responseType: 'blob'})
      const image_url = URL.createObjectURL(res.data)

      if (url_nr==1){this.setState({url1: image_url })}
      if (url_nr==2){this.setState({url2: image_url })}
    }

    // updateImage = async()=>{

    // }
  
    render() {

      const { activeItem , url1, url2} = this.state
  
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
            <img src={this.state.url1} style={{display: "block", width: "29.85%",  marginLeft: "auto", }}/> 
            <div style = {{borderLeft: "2px solid black", borderRight: "2px solid black"}}/>
            <img src={this.state.url2} style={{display: "block", width: "29.85%", marginRight: "auto"}}/> 
          </div>
          <button onClick={() => this.updateImage("monetsque", 1)}  class="ui button">Click Here</button>
          <button onClick={() => this.updateImage("monet", 2)}  class="ui button">Click Here</button>
          </>

      )
    }
  }