import React from 'react';
import { deleteTaskAction, showTaskAction } from '../../store/actions/todoListActions';
import { connect } from 'react-redux';
import {Component } from 'react';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Task">
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
				<Button label="Show" icon="pi pi-info" className="p-button-success" onClick={() => this.props.showTask(this.props)}/>
				<Button label="Edit" icon="pi pi-spinner" onClick={() => this.props.showTask(this.props)}/>
				<Button label="Delete" icon="pi pi-ban" className="p-button-danger" onClick={() => this.props.showTask(this.props)}/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	deleteTask: (payload) => dispatch(deleteTaskAction(payload)),
	showTask: (payload) => dispatch(showTaskAction(payload))
});

export default connect(null, mapDispatchToProps)(Task);
