import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { Dropdown } from 'semantic-ui-react'


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
                  style={{ fontSize: "25px", width: "75%", textAlign: "center", display: "inline-block" }} />
              <Menu.Item
                  name="Tutorial"
                  active={activeItem === "Monet's history"}
                  onClick={this.handleItemClick}
                  style={{ width: "25%", textAlign: "center", display: "inline-block", paddingTop: "25px" }} />
          </Menu>
          
          <div style = {{display: "flex", overflow: "auto"}}>
            {/* <h2>Hello</h2> */}
            <img src="img/about.jpg" style={{display: "block", width: "29.85%",  marginLeft: "auto", }}/> 
            <div style = {{borderLeft: "2px solid black", height: "100%", borderRight: "2px solid black"}}/>
            <img src="img/about.jpg" style={{display: "block", width: "29.85%", marginRight: "auto"}}/> 
          </div>
          </>

      )
    }
  }