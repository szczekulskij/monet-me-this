import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import StartModal from "./StartModal"
import TutorialModal from "./TutorialModal"
import {useState, useEffect} from "react";
import axios from 'axios';

export default class Navigation2 extends Component {
    state = {activeItem : false,
             url1: "img/before.jpg",
             url2: "img/after.jpg",
             score : 0,
             total: 0,
             percentage : 100,
             correctPicture : null}

    calculateScore = () => {
      if (this.total==0) {
        this.setState({percentage: 0 })
      }
      let pct = this.score/this.total * 100
      this.setState({percentage: pct }) 
    }
    updateBothImages = async (hardcore_level = false) =>{

      if (!hardcore_level){
        if (Math.floor(Math.random() * 2) == 1){
          await this.updateImage("monet", 1)
          await this.updateImage("monetsque", 2)
          this.setState({correctPicture: 1 })
        } else {
          await this.updateImage("monet", 2)
          await this.updateImage("monetsque", 1)
          this.setState({correctPicture: 2 })
          }
        }
        this.setState({total: this.state.total+1 }) 
        this.calculateScore()
        console.log("correctPicture:", this.state.correctPicture)

      }
    
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
      const image_url = await URL.createObjectURL(res.data)

      if (url_nr==0){return image_url}
      if (url_nr==1){this.setState({url1: image_url })}
      if (url_nr==2){this.setState({url2: image_url })}
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    
    // setState({url1: this.updateImage('monetsque') })
    // setState({url1: this.updateImage('monetsque') })
    render() {


      const { activeItem , url1, url2, score} = this.state
  
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
          <div className="bar" style={{width:`${this.state.percentage }%`}}>
            <div className="progress">Score: {this.state.score}/{this.state.total}</div>
          </div>
        </div>
          
          <div style = {{display: "flex", overflow: "auto", paddingTop: "0px", margingTop: "0px"}}>
            <img 
              active={activeItem === "Monet's history"}
              onClick={() => this.updateBothImages()} 
              src={this.state.url1} 
              style={{display: "block", width: "29.85%",  marginLeft: "auto", } }
            /> 
            <div style = {{borderLeft: "2px solid black", borderRight: "2px solid black"}}/>
            <img 
            active={activeItem === "Monet's history"}
            onClick={() => this.updateBothImages()} 
              src={this.state.url2} 
              style={{display: "block", width: "29.85%", marginRight: "auto"}}
            /> 
          </div>
          </>

      )
    }
  }