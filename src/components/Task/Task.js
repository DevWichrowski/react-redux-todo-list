import React, { Component } from 'react';

export default class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Task">
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
			</div>
		);
	}
}
