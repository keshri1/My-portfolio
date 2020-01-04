import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Landing extends Component {
	render () {
		return (
			<div style = {{width:'100%', margin: 'auto'}}>
				<Grid className = "landing-grid">
					<Cell col={12}>
						<img
							src="https://www.bing.com/th?id=OIP.4LMrQNDTTn59vh621EdICAHaHa&pid=Api&rs=1"
							alt="avatar"
							className="avatar-img"
						/>
						<div className = "banner-text">
							<h1>Front End Developer</h1>
							<hr/>
							<p> HTML/CSS | Javascript | React | Java | Selenium</p> 

							<div className="social-links">
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true"/>
								</a>

								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true"/>
								</a>

								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-twitter-square" aria-hidden="true"/>
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
				
		)
	}
		
}
export default Landing;
