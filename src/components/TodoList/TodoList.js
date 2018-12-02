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
			name: ''
		};
	}
	render() {
		return (
			<div className="todo-list">
				<h2>TodoList</h2>
				{this.props.todoList.map((task, index) => (
					<Task key={index} name={task.name} />
          ))}
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
