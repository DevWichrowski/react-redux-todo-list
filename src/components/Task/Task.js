import React, { Component } from 'react'
import './Task.scss';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Task;