import React, { Component } from 'react'
import './Task.scss';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Task;