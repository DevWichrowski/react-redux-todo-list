import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../store/actions/todoListActions';
import './AddTask.scss';
import { idGenerator } from '../../store/reducers/todoListReducer';

class AddTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempName: '',
			tempDescription: ''
		};
	}

	saveName = (e) => {
		this.setState({ tempName: e.target.value });
	};

	saveDescription = (e) => {
		this.setState({ tempDescription: e.target.value });
	};
	render() {
		return (
			<div className="AddTask">
				<h2>Add Task</h2>
				<p>name:</p>
				<input onChange={this.saveName} />
				<br />
				<p>description:</p>
				<textarea onChange={this.saveDescription} />
				<br />
				<button
					onClick={() =>
						this.props.addItem({id: idGenerator() ,name: this.state.tempName, description: this.state.tempDescription })}
				>
					Add task
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => dispatch(addTaskAction(payload))
});

export default connect(null, mapDispatchToProps)(AddTask);
