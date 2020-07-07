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
    render(){
    
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                
                    <h1 id="logo" className=""><img id="logo-img" className="" src="./nasa.png" alt="Logo"/><Link to="/APOD-React/">APOD NASA</Link></h1>
                
                    <SearchForm className="nav-item" />
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
                            <Search url="https://apodapi.herokuapp.com/search/?search_query=planetary%20nebula&image_thumbnail_size=240&number=10&page=1"/>
                        </Route>
                    </Switch>
                
            </div>

        </header>
        )
    }
}

