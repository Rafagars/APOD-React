import React, { Component } from 'react'

export default class Day extends Component {
	
	render(){
		const { day } = this.props
		const Media = () => {
			if (day['media_type'] === 'video'){
				return(
				<div class="embed-responsive embed-responsive-16by9">
					<iframe title={day['title']} class="embed-responsive-item" src={day['url']}></iframe>
				</div>
				)
			} else if (day['media_type'] === 'image'){
				return(
					<a href={day['url']}><img src={day['url']} className="apod" alt="APOD"/></a>
				)
			} else {
				return(
					<a href={day["apod_site"]} >Click Here</a>
				)
			}
		}
		return(
			<div className="text-center">
				<h1> Astronomy Picture of the Day </h1>
				<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
				<h2> {day['title']} </h2>
				<h5> {day['date']} </h5>
				<Media />
				<h6> {day['copyright']} </h6>
				<br />
				<p> {day['description']} </p>
			</div>
			)
	}
}
