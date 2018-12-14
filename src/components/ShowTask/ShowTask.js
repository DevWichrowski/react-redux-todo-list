import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import './ShowTask.scss';
import { showButtonHandler } from '../../store/actions/todoListActions';

class ShowTask extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Dialog header={`${this.props.todoList.showName}`} visible={this.props.todoList.showTaskVisible} width="600px" modal={true} onHide={this.props.toggleShowTask}>
				{/* <div className="ShowTask"> */}
					<p>Task name:</p>
					<p><strong>{this.props.todoList.showName}</strong></p>
					<p>Task Description:</p>
					<p><strong>{this.props.todoList.showDescription}</strong></p>
				{/* </div> */}
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	toggleShowTask: () => dispatch(showButtonHandler())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowTask);
