import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import { HashRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<HashRouter basename="/">
				<div className="App">
					<Main />
				</div>
			</HashRouter>
		);
	}
}

export default App;
