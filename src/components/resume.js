import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render () {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign:'center'}}>
							<img
								src="IMG_20161120_081848.jpg"
								alt='avatar'
								style={{height:'200px'}}/>
						</div>
						<h2 style={{paddingTop:'2em'}}>Sunny Keshri</h2> 
						<h2 style={{color:'grey'}}>Programmer</h2>
						<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
						<h5>Address</h5>
						<p>Block 1 - 9C, Radiance ivy terrace, Navalur - 603103, Chennai</p>
						<h5>Phone</h5>
						<p>8951575173</p>
						<h5>Email</h5>
						<p>sunnysines99@gmail.com</p>
						<h5>Web</h5>
						<p>Mywebsite.com</p>
						<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>
						<Education 
						startYear={2002}
						endYear={2012}
						schoolName="Bishop Westcott Boys school, Namkum, Ranchi"
						schoolBoard="ICSE"
						percentage={82}
						/>
						<Education 
						startYear={2012}
						endYear={2014}
						schoolName="D.A.V. Public School, B.S. City, Jharkhand"
						schoolBoard="CBSE"
						percentage={87.33}
						/>
						<Education 
						startYear={2012}
						endYear={2014}
						schoolName="Siddanganga Institute of Technology, Tumakuru, Karnataka"
						schoolBoard="Visvesvaraya Technological University (V.T.U.)"
						percentage={75.6}
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>
						
						<h2>Experience</h2>
						<Experience 
						startYear={2018}
						endYear="Currently working here."
						jobName="Tata Consultancy Services"
						jobDescription="Software Developer"
						/>
						<hr style={{borderTop:'3px solid #e22947'}}/>
						
						<h2>Skills</h2>
						<Skills
						skill="HTML5"
						progress="40"
						/>
						<Skills
						skill="CSS3"
						progress="40"
						/>
						<Skills
						skill="Javascript"
						progress="40"
						/>
						<Skills
						skill="React Js"
						progress="50"
						/>
						<Skills
						skill="Java"
						progress="50"
						/>
						<Skills
						skill="Selenium"
						progress="60"
						/>
					</Cell>
				</Grid>
			</div>
		)
	}
		
}
export default Resume;
