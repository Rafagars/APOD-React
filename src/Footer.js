import React, { Component } from 'react'


export default class Footer extends Component {
	render(){
		return(
			<div className="text-center">
				<p>
					<b>This is a unofficial version of the site made by: Rafael Garcia. For non-commercial use. Only to practice with React</b>
					<br />
					<b> Authors &amp; editors: </b>
					<a href="http://www.phy.mtu.edu/faculty/Nemiroff.html">Robert Nemiroff</a>
					(<a href="http://www.phy.mtu.edu/">MTU</a>) &amp; 
					<a href="https://antwrp.gsfc.nasa.gov/htmltest/jbonnell/www/bonnell.html"> Jerry Bonnell</a> (<a href="http://www.astro.umd.edu/">UMCP</a>)<br />
					<b>NASA Official: </b> Phillip Newman
					<a href="lib/about_apod.html#srapply"> (Specific rights apply) </a>.<br />
					<a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Web
					Privacy Policy and Important Notices</a><br />
					<b>A service of: </b>
					<a href="https://astrophysics.gsfc.nasa.gov/">ASD</a> at
					<a href="https://www.nasa.gov/">NASA</a> /
					<a href="https://www.nasa.gov/centers/goddard/">GSFC</a>
					<b> &amp; </b> <a href="http://www.mtu.edu/">Michigan Tech. U.</a><br />
				</p>
			</div>
			)
	}
		
}
