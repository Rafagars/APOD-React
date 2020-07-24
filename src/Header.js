import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Content from './Content'
import Random from './Random'
import Url from './Url'
import SearchForm from './SearchForm'
import Search from './Search'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log(`Search: ${this.state.value}`);
        return(
            <Search query={this.state.value} />
        )
    }
    render(){
        const {value} = this.state
        console.log(value);
    
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                
                    <h1 id="logo" className=""><img id="logo-img" className="" src="./nasa.png" alt="Logo"/><Link to="/APOD-React/">APOD NASA</Link></h1>
                
                    <form action="/APOD-React/search" onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." className="form-control"/>
                        <input type="submit" className="d-none" value="Search"/>
                    </form>
                    <Link to="/APOD-React/archives" className="nav-item nav-link">Archives</Link>
                    <Link to="/APOD-React/random" className="nav-item nav-link">Random</Link>

                    <Switch>
                        <Route exact path="/APOD-React">
                            <Content url="https://apodapi.herokuapp.com/api/"/>
                        </Route>
                        <Route path="/APOD-React/archives/:year/:month/:day">
                          <Url />
                        </Route>
                        <Route path="/APOD-React/archives/:year/:month/">
                          <Url />
                        </Route>
                        <Route path="/APOD-React/archives/:year">
                            <Url />
                        </Route>
                        <Route path="/APOD-React/archives" >
                            <Url />
                        </Route>  
                        <Route path="/APOD-React/random">
                            <Random/>
                        </Route>
                        <Route path="/APOD-React/search">
                            <Search query={value}/>
                        </Route>
                    </Switch>
                
            </div>

        </header>
        )
    }
}

