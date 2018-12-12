import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditTask.scss';
import { Dialog } from 'primereact/dialog';
import { editTaskAction, editDialogHandler } from '../../store/actions/todoListActions';
import { Button } from 'primereact/button';

class EditTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newName: '',
			newDescription: ''
		};
	}

	saveName = (e) => {
		this.setState({ newName: e.target.value });
	};

	saveDescription = (e) => {
		this.setState({ newDescription: e.target.value });
	};

	render() {
		return (
			<div className="EditTask">
				<Dialog
					header={`You are editing ${this.props.todoList.showName} task`}
					visible={this.props.todoList.editDialogVisible}
					width="350px"
					modal={true}
					onHide={this.props.toggleEditDialogHandler}
				>
					<p>Enter new title</p>
					<input onChange={this.saveName} />
					<p>Enter new description</p>
					<textarea onChange={this.saveDescription} />
					<br />
					<Button
						label="Edit"
						icon="pi pi-spinner"
						onClick={() => {
							this.props.editTask({ name: this.state.newName, description: this.state.newDescription });
						}}
					/>
				</Dialog>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	editTask: (payload) => dispatch(editTaskAction(payload)),
	toggleEditDialogHandler: () => dispatch(editDialogHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
