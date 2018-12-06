import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from '../../store/actions/todoListActions';

class TodoList extends Component {
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
			<div className="TodoList">
				{this.props.todoList.tasks.map((item, index) => {
					return (
						<div className="border">
							<p>{item.name}</p>
							<p>{item.description}</p>
						</div>
					);
				})}
				<p>name:</p>
				<input onChange={this.saveName} />
				<br />
				<p>description:</p>
				<textarea onChange={this.saveDescription} />
				<br />
				<button
					onClick={() =>
						this.props.addItem({ name: this.state.tempName, description: this.state.tempDescription })}
				>
					Add task
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => dispatch(addTaskAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
