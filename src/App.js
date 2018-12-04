import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeNameAction} from './store/actions/todoListActions';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1> Hi reduc, name from store is: {this.props.todoList.name}</h1>
        <button onClick={this.props.changeName}>Change name</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
  changeName: () => dispatch(changeNameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

