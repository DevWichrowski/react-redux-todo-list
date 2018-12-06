import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemAction } from './store/actions/todoListActions';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempName: '',
      tempDescription: ''
    }
  }

  saveName = (e) => {
    this.setState({tempName: e.target.value});
  }

  saveDescription = (e) => {
    this.setState({tempDescription: e.target.value})
  }
q

	render() {
		return (
			<div className="App">
				<h1>{this.props.todoList.name}</h1>
        <h2>{this.props.todoList.description}</h2>
        <input onChange={this.saveName}></input>
        <textarea onChange={this.saveDescription}></textarea>
				<button onClick={() => this.props.addItem({name: this.state.tempName, description: this.state.tempDescription})}>Change name</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (payload) => dispatch(addItemAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
