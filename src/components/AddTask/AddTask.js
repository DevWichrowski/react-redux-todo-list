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
					<input onChange={this.saveName} value={this.state.tempName} maxLength={70} />
					<br />
					<p>Description:</p>
					<textarea onChange={this.saveDescription} value={this.state.tempDescription} maxLength={400} />
					<br />
					{this.state.tempName !== '' ? (
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
								this.setState({ id: '', tempName: '', tempDescription: '' });
								this.props.toggleAddTaskDialog();
							}}
						/>
					) : (
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
								this.setState({ id: '', tempName: '', tempDescription: '' });
								this.props.toggleAddTaskDialog();
							}}
							disabled
						/>
					)}
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
