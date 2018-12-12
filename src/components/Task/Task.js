import React from 'react';
import {
	deleteTaskAction,
	showTaskAction,
	showButtonHandler,
	editDialogHandler
} from '../../store/actions/todoListActions';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Task.scss';

class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Task">
				<div className="task-left-column">
					<p> {this.props.name} </p>
				</div>
				<div className="task-right-column">
				<Button
					label="Show"
					icon="pi pi-info"
					className="p-button-success"
					onClick={() => {
						this.props.showTask(this.props);
						this.props.toggleShowTask();
					}}
				/>
				<Button
					label="Edit"
					icon="pi pi-spinner"
					onClick={() => {
						this.props.showTask(this.props);
						this.props.toggleEditDialogHandler();
					}}
				/>{' '}
				<Button
					label="Delete"
					icon="pi pi-ban"
					className="p-button-danger"
					onClick={() => this.props.deleteTask(this.props)}
				/>{' '}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (payload) => dispatch(deleteTaskAction(payload)),
	showTask: (payload) => dispatch(showTaskAction(payload)),
	toggleShowTask: () => dispatch(showButtonHandler()),
	toggleEditDialogHandler: () => dispatch(editDialogHandler())
});

export default connect(null, mapDispatchToProps)(Task);
