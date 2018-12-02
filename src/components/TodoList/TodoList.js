import React, { Component } from 'react'
import Task from '../Task/Task';
import './TodoList.scss';


class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        <Task />
      </div>
    )
  }
}

export default TodoList;