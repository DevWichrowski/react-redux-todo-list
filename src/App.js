import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNameAction } from './store/actions/todoListActions';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tempName: ''
    }
  }

  saveName = (e) => {
    this.setState({tempName: e.target.value});
  }


	render() {
		return (
			<div className="App">
				<h1> Hi reduc, name from store is: {this.props.todoList.name}</h1>
        <input onChange={this.saveName}></input>
				<button onClick={() => this.props.changeName(this.state.tempName)}>Change name</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

const mapDispatchToProps = (dispatch) => ({
	changeName: (payload) => dispatch(changeNameAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
