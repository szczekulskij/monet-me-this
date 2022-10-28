import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import { Dropdown } from 'semantic-ui-react'

const artist_options = [
    { key: 1, text: 'Monet', value: 1 },
    { key: 2, text: 'VanGogh', value: 2 },
    { key: 3, text: 'More to come ...', value: 3 },
  ]

  const language_options = [
    { key: 1, text: 'English', value: 1 },
    // { key: 2, text: 'Polish', value: 2 },
    // { key: 3, text: 'Spanish', value: 3 },
  ]


export default class Navigation2 extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header 
            as={Link} to='/'
            style={{fontSize:"30px", height:"50px", width:"40%", textAlign: "center", display: "inline", padding: "10px", margin: "10px"}}
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
            onClick={this.handleItemClick}>
            <Dropdown text='Choose Artist' options={artist_options} simple item />
        </Menu.Item>
        
        <Menu.Item
            name='language'
            onClick={this.handleItemClick}>
            <Dropdown text='Choose Language' options={language_options} simple item />
        </Menu.Item>
        <Menu.Item
            name='github'
            onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
