import React, { Component } from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class App extends Component {
	render(){
		return(
			<Router>
				<Header />
			</Router>
			)
	}
}

export default App;
