import React, { Component } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import AddTask from './components/AddTask/AddTask';
import ShowTask from './components/ShowTask/ShowTask';
import EditTask from './components/EditTask/EditTask';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import Main from './components/Main/Main';

class App extends Component {
	render() {
		return (
				<div className="App">
				<Main />
				</div>
		);
	}
}

export default App;
