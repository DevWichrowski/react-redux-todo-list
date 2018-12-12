import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction, addDialogHandler } from '../../store/actions/todoListActions';
import './AddTask.scss';
import { idGenerator } from '../../store/reducers/todoListReducer';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

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
				<Dialog
					header="Adding new task"
					visible={this.props.todoList.addDialogVisible}
					width="350px"
					modal={true}
					onHide={this.props.toggleAddTaskDialog}
				>
					<p>Title:</p>
					<input onChange={this.saveName} />
					<br />
					<p>Description:</p>
					<textarea onChange={this.saveDescription} />
					<br />
					<Button
						label="Add"
						icon="pi pi-plus-circle"
						className="p-button-success"
						onClick={() => {
							this.props.addItem({
								id: idGenerator(),
								name: this.state.tempName,
								description: this.state.tempDescription
							});
						}}
					/>
				</Dialog>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => dispatch(addTaskAction(payload)),
	toggleAddTaskDialog: () => dispatch(addDialogHandler())
});

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
