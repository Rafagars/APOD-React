import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
        <header id="header-nav" className="navbar">
            <div className="container">
                
                <h1 id="logo"><img id="logo-img" className="" src="./nasa.png"/><a href="#">APOD NASA</a></h1>
                
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#">Archives</a>
                <a className="nav-item nav-link" href="#">Random</a>
   
            </div>

        </header>
        )
    }
}

export default Header
