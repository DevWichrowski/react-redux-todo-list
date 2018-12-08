import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTask from './components/AddTask/AddTask';
import ShowTask from './components/ShowTask/ShowTask';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
				<br />
				<AddTask />
				<ShowTask />
			</div>
		);
	}
}

export default App;
