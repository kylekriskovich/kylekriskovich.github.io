import React, {Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,CardMenu,IconButton, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props) { 
        super(props);
        this.state = { activeTab: 0};
    }

    projectContents(){
        if(this.state.activeTab === 0){
            return(
                <div className = "project-grid">
                <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: ''}}>Portfolio Website</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Show GitHub</Button>
                </CardActions> 
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>

                <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: ''}}>Portfolio Website</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>Show GitHub</Button>
                </CardActions> 
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        }else if (this.state.activeTab === 1){
            return(
                <div className = "project-grid">
                    <Card shadow={0} style={{width: '350px', height: '350px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: ''}}>Uni Project 1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Show GitHub</Button>
                    </CardActions> 
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                    </Card>
                </div>
            )
        }
    }
    

    render() {
        return( 
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Website</Tab>
                    <Tab>Uni Projects</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className = "projects">{this.projectContents()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;