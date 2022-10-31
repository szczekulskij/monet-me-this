import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import StartModal from "./StartModal"
import TutorialModal from "./TutorialModal"


export default class Navigation2 extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
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
          </>

      )
    }
  }