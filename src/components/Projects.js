import React, { Component } from 'react';
import ProjectBox from './ProjectBox'

class Projects extends Component {
  state = {
    active: 'All'
  }

  componentWillMount() {
    document.body.style.background = '#120038 url("./backgrounds/nightsky.jpg") repeat fixed'
    document.body.style.backgroundSize ='cover';
  }

  changeActive = (button) => {
    this.setState ({active: button})
  }

  renderButtons (list) {
    const buttons = list.map((item, index) => {
      const key = `button-${index}`
      return <button
              key = {key}
              className = {this.state.active === item ? 'active' : ''}
              onClick = {()=> this.changeActive(item)}>{item}</button>
    })
    return buttons;
  }

  render () {

    return (
      <div id='projects'>
        <div id='button-container'>
        {this.renderButtons(['All', 'FreeCodeCamp', 'React'])}
        </div>
        <ProjectBox />
      </div>
    )
  }
}

export default Projects;
