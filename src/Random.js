import React, { Component } from 'react';
import './Content.css'
import Day from './Day'

export default class Random extends Component  {

	state = {
    	data: [],
	  }
	  
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

    const url = "https://apodapi.herokuapp.com/api/?count=1"

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

    const randoms = data.map((random, index) => {
    	return(
    		<div className="text-center">
    			<Day day={random} />
			</div>
    		)
    })

	return (
		<div className="container">
			{randoms}
		</div>		
	)}
}

