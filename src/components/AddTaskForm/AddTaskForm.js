import React, { Component } from 'react';
import { selectTodo } from '../../store/selectors/task.selector';
import { addTaskAction } from '../../store/actions/todo.action';
import { connect } from 'react-redux';

class AddTaskForm extends Component {
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
			<div>
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

const mapDispatchToProps = (dispatch) => ({
	addTask: (task) => dispatch(addTaskAction(task))
});

export default connect(null, mapDispatchToProps)(AddTaskForm);
