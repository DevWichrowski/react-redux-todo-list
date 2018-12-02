import React, { Component } from 'react';
import Task from '../Task/Task';
import './TodoList.scss';
import { connect } from 'react-redux';
import { selectTodo } from '../../store/selectors/task.selector';
import { addTaskAction } from '../../store/actions/todo.action';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: ''
		};
	}

	saveTitle = (event) => {
		this.setState({ title: event.target.value });
	};

	saveDescription = (event) => {
		this.setState({ description: event.target.value });
	};

	addTask = () => {
		this.props.addTask({ title: this.state.title, description: this.state.description });
		this.setState({ title: '', description: '' });
	};

	render() {
		return (
			<div className="todo-list">
				<h2>TodoList</h2>
				{this.props.todoList.map((task, index) => (
					<Task key={index} title={task.title} description={task.description} />
				))}
				<form>
					<input onChange={this.saveTitle} value={this.state.title} />
					<textarea onChange={this.saveDescription} value={this.state.description} />
					<button type="button" onClick={() => this.addTask()}>
						Add task
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: selectTodo(state)
});

const mapDispatchToProps = (dispatch) => ({
	addTask: (task) => dispatch(addTaskAction(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
