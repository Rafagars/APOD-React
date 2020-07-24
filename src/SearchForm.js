import React, { Component } from 'react';
import Search from './Search'

export default class NameForm extends Component {
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
            <Search query = {this.state.value} />
        )
    }

    render(){
        return(
            <form action="/APOD-React/search" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..." className="form-control"/>
                <input type="submit" className="d-none" value="Search"/>
            </form>

        )
    }
}