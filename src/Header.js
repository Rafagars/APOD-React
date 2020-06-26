import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from './Content'
import Random from './Random'
import Archive from './Archive'

class Header extends Component {
    render(){
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                <Router>
                    <h1 id="logo"><img id="logo-img" className="" src="./nasa.png" alt="Logo"/><Link to="/APOD-React/">APOD NASA</Link></h1>
                
                    <Link to="/APOD-React/" className="nav-item nav-link">Home</Link>
                    <Link to="/APOD-React/archives" className="nav-item nav-link">Archives</Link>
                    <Link to="/APOD-React/random" className="nav-item nav-link">Random</Link>

                    <Switch>
                        <Route exact path="/APOD-React">
                            <Content url="https://apodapi.herokuapp.com/api/"/>
                        </Route>
                        <Route path="/APOD-React/archives/:date">
                            <Archive />
                        </Route>  
                        <Route path="/APOD-React/random">
                            <Random/>
                        </Route>
                    </Switch>
                </Router>
   
            </div>

        </header>
        )
    }
}

export default Header
