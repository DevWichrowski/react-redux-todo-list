import React, { Component } from 'react';
import Task from '../Task/Task';
import './TodoList.scss';
import { connect } from 'react-redux';
import { selectTodo, selectShowTask } from '../../store/selectors/task.selector';
import { deleteTaskAction, showTaskAction } from '../../store/actions/todo.action';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	deleteTask = (task) => {
		this.props.deleteTask(task);
	};

	showTask = (task) => {
		this.props.showTask(task);
	};

	render() {
		return (
			<div className="todo-list">
				<h2>TodoList</h2>
				{this.props.todoList.map((task, index) => (
					<Task key={index} task={task} deleteTask={this.deleteTask} showTask={this.showTask} />
				))}
				<AddTaskForm />
				<form>
					<p>Title: {this.props.selectTask.title}</p>
					<p>Description: {this.props.selectTask.description}</p>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: selectTodo(state),
	selectTask: selectShowTask(state)
});

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (task) => dispatch(deleteTaskAction(task.id)),
	showTask: (task) => dispatch(showTaskAction(task.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
