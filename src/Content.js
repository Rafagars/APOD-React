import React, { Component } from 'react';
import './Content.css'
import Day from './Day'

export default class Content extends Component  {

	state = {
    	data: [],
	  }
	  
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

    const { url } = this.props
    
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result,
        })
      })
  }

  render() {
    const { data } = this.state

	  return (
		  <div className="container">
			  <Day day={data} />
		  </div>
	)}
}
