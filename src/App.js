import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTask from './components/AddTask/AddTask';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
				<br />
				<AddTask />
			</div>
		);
	}
}

export default App;
