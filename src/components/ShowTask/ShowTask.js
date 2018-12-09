import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import './ShowTask.scss';

class ShowTask extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		}
	}
	render() {
		return (
			<Dialog header={this.props.todoList.showName} visible={this.state.visible} width="350px" modal={true} onHide={(e) => this.setState({visible: false})}>
				<div className="ShowTask">
					<p>Task name:</p>
					<p>{this.props.todoList.showName}</p>
					<p>Task Description:</p>
					<p>{this.props.todoList.showDescription}</p>
				</div>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

export default connect(mapStateToProps, null)(ShowTask);
