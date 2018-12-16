import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main/Main';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route exact path="/" component={Main} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
