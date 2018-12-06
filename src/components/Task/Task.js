import React from 'react';

const Task = (props) => {
	return (
		<div>
			<div className="Task">
				<p>{props.name}</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Task;