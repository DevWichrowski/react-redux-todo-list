import React, { Component } from 'react';
import './EditTask.scss';

class EditTask extends Component {
	render() {
		return (
			<div className="EditTask">
				<p>Task name</p>
				<input />
				<p>Task description</p>
				<textarea />
				<br />
				<button>Submit</button>
			</div>
		);
	}
}

export default EditTask;
