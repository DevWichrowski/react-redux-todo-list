import React, { Component } from 'react'
import './Task.scss';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <h5>{this.props.title}</h5>
          <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Task;