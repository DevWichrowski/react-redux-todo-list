import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTask from './components/AddTask/AddTask';
import ShowTask from './components/ShowTask/ShowTask';
import EditTask from './components/EditTask/EditTask';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
				<br />
				<AddTask />
				<ShowTask />
				<EditTask />
				<AddTaskButton />
			</div>
		);
	}
}

export default App;
