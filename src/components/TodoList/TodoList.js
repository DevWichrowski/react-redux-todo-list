import React, { Component } from 'react';
import Task from '../Task/Task';
import './TodoList.scss';
import { connect } from 'react-redux';
import { selectTodo } from '../../store/selectors/task.selector';
import { addTaskAction, deleteTaskAction } from '../../store/actions/todo.action';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	deleteTask = (task) => {
		this.props.deleteTask(task);
	}

	render() {
		return (
			<div className="todo-list">
				<h2>TodoList</h2>
				{this.props.todoList.map((task, index) => (
					<Task key={index} task={task} deleteTask={this.deleteTask}/>
				))}
				<AddTaskForm />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: selectTodo(state)
});

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (task) => dispatch(deleteTaskAction(task.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
