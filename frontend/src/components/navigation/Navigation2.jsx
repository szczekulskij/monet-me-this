import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default class Navigation2 extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header 
            as={Link} to='/'
            style={{fontSize:"30px", height:"50px", width:"60%", textAlign: "center", display: "inline", padding: "10px", margin: "10px"}}
            onClick={this.handleItemClick}>
                Monet me this
        </Menu.Item >
        <Menu.Item
            as={Link} to='/monet/history'
            name="Monet's history"
            active={activeItem === "Monet's history"}
            onClick={this.handleItemClick}
        />
        <Menu.Item
            as={Link} to='/monet/generator'
            name="Monet's painting generator"
            active={activeItem === "Monet's painting generator"}
            onClick={this.handleItemClick}
        />
        <Menu.Item
            name='choose artist'
            active={activeItem === 'choose artist'}
            onClick={this.handleItemClick}
        />
        <Menu.Item
            name='language'
            onClick={this.handleItemClick}
        />
        <Menu.Item
            name='github'
            onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
