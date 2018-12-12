import React, { Component } from 'react';
import { addDialogHandler } from '../../store/actions/todoListActions';
import { connect } from 'react-redux';

class AddTaskButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.toggleAddTaskDialog}>+</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskButton);
