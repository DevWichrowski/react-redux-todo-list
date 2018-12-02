import React, { Component } from 'react'
import './Task.scss';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
          <h5>{this.props.task.title}</h5>
          <p>{this.props.task.description}</p>
          <button type="button">Show</button>
          <button type="button" onClick={() => this.props.deleteTask(this.props.task)}>Delete</button>
      </div>
    )
  }
}

export default Task;