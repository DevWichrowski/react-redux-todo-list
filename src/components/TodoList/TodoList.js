import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';

class TodoList extends Component {
	render() {
		return (
			<div className="TodoList">
				{this.props.todoList.tasks.map((item, index) => {
					return (
						<div className="border" key={index}>
							<Task name={item.name} description={item.description} />
						</div>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

export default connect(mapStateToProps, null)(TodoList);
