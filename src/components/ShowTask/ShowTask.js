import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShowTask.scss';

class ShowTask extends Component {
    constructor(props){
        super(props);
    }
	render() {
		return (
			<div className="ShowTask">
				<p>Task name:</p>
				<p>{this.props.todoList.showName}</p>
				<p>Task Description:</p>
				<p>{this.props.todoList.showDescription}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

export default connect(mapStateToProps, null)(ShowTask);
