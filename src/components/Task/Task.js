import React from 'react';
import { deleteTaskAction } from '../../store/actions/todoListActions';
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
				<button>Show</button>
				<button onClick={() => this.props.deleteTask(this.props)}>Delete</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (payload) => dispatch(deleteTaskAction(payload))
});

export default connect(null, mapDispatchToProps)(Task);
