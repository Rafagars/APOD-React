import React, { Component } from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
	render(){
		return(
			<Router >
				<Header />
				<Footer />
			</Router>
			)
	}
}


