import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAction } from './store/actions/todoListActions';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tempName: '',
			tempDescription: ''
		};
	}

	saveName = (e) => {
		this.setState({ tempName: e.target.value });
	};

	saveDescription = (e) => {
		this.setState({ tempDescription: e.target.value });
	};
	q;

	render() {
		return (
			<div className="App">
				{this.props.todoList.tasks.map((item, index) => {
					return (
						<div>
							<h1>{item.name}</h1>
							<h2>{item.description}</h2>
						</div>
					);
				})}
				<input onChange={this.saveName} />
				<textarea onChange={this.saveDescription} />
				<button
					onClick={() =>
						this.props.addItem({ name: this.state.tempName, description: this.state.tempDescription })}
				>
					Change name
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => dispatch(addTaskAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
