import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import { addDialogHandler } from '../../store/actions/todoListActions';

class TodoList extends Component {
	render() {
		return (
			<div className="TodoList">
				{this.props.todoList.tasks.map((item, index) => {
					return (
						<div className="border" key={index}>
							<Task  id={item.id} name={item.name} description={item.description} />
						</div>
					);
				})}
				<button onClick={this.props.toggleAddTaskDialog}>Add Task</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	toggleAddTaskDialog: () => dispatch(addDialogHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
