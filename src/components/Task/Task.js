import React from 'react';
import { deleteTaskAction, showTaskAction } from '../../store/actions/todoListActions';
import { connect } from 'react-redux';
import {Component } from 'react';

class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Task">
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
				<button onClick={() => this.props.showTask(this.props)}>Show</button>
				<button onClick={() => this.props.showTask(this.props)}>Edit</button>
				<button onClick={() => this.props.deleteTask(this.props)}>Delete</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (payload) => dispatch(deleteTaskAction(payload)),
	showTask: (payload) => dispatch(showTaskAction(payload))
});

export default connect(null, mapDispatchToProps)(Task);
