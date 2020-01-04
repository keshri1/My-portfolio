import React, { Component } from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';
class Project extends Component {

constructor(props){
	super(props);
	this.state = {activeTab: 0 };
}

toggleCategories() {
	if(this.state.activeTab===0) {
		return(
		<div className="projects-grid">
			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover'}}>React Project #1</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover'}}>React Project #2</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center/cover'}}>React Project #3</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>
		</div>
		)
	}
	else if(this.state.activeTab===1) {
		return(
			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(https://icon-library.net/images/java-icon-png/java-icon-png-5.jpg) center/cover'}}>Java Project #1</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>
		)
	}
	else if(this.state.activeTab===2) {
		return(
			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png) center/cover'}}>Java script Project #1</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>
		)
	}
	else if(this.state.activeTab===3) {
		return(
			<Card shadow={5} style={{minwidth:'450px', margin:'auto'}}>
				<CardTitle style={{color:'#000',height:'170px',background:'url(http://www.myiconfinder.com/uploads/iconsets/8b61de4c84033266e15317a6eb9fda2d-css3.png) center/cover'}}>HTML/CSS Project #1</CardTitle>
				<CardText>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</CardText>
				<CardActions border>
					<Button colored>Github</Button>
					<Button colored>codepen</Button>
					<Button colored>LiveDemo</Button>
				</CardActions>
				<CardMenu style={{color:'#000'}}>
					<IconButton name='share'/>
				</CardMenu>
			</Card>
		)
	}
}

	render () {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab:tabId})} ripple>
					<Tab>React</Tab>
					<Tab>Java</Tab>
					<Tab>java script</Tab>
					<Tab>HTML/CSS</Tab>
				</Tabs>

				
					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
                
			</div>
		)
	}
		
}
export default Project;
