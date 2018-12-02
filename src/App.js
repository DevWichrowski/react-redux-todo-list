import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
