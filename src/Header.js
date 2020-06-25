import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Content from './Content'
import Random from './Random'
import Archive from './Archive'

class Header extends Component {
    render(){
        let thisYear = new Date()
        thisYear = thisYear.getFullYear()
        const years = Array.from(Array((thisYear + 1) - 1995), (_, i) => i + 1995)
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                <Router>
                    <h1 id="logo"><img id="logo-img" className="" src="./nasa.png" alt="Logo"/><Link to="/">APOD NASA</Link></h1>
                
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/archives" className="nav-item nav-link">Archives</Link>
                    <Link to="/random" className="nav-item nav-link">Random</Link>

                    <Switch>
                        <Route exact path="/">
                            <Content url="https://apodapi.herokuapp.com/api/"/>
                        </Route>
                        <Route path="/archives">
                            <Archive array = {years} source="/archive"/>
                        </Route>  
                        <Route path="/random">
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
