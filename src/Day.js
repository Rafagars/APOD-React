import React, { Component } from 'react'

class Day extends Component {
	render(){
		const { day } = this.props
		return(
			<div className="text-center">
				<h1> Astronomy Picture of the Day </h1>
				<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
				<h2> {day['title']} </h2>
				<h5> {day['date']} </h5>
				<a href={day['url']}><img src={day['url']} className="apod"/></a>
				<h6> {day['copyright']} </h6>
				<br />
				<p> {day['description']} </p>
			</div>
			)
	}
}

export default Day