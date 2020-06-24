import React, { Component } from 'react';
import './Content.css'

class Content extends Component  {

	state = {
    	data: [],
	  }
	  
  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

    const url = "https://apodapi.herokuapp.com/api/"

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
		< >
			<div className="text-center container">
				<h1> Astronomy Picture of the Day </h1>
				<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
				<h2> {data['title']} </h2>
				<h5> {data['date']} </h5>
				<img src={data['url']} />
				<h6> {data['copyright']} </h6>
				<br />
				<p> {data['description']} </p>
			</div>
		< />
		
	)}
}

export default Content