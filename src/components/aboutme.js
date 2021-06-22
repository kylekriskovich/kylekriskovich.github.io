import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from './resources/profile.png';

class About extends Component {
    render() {
        return( 
            <div> 
                <Grid>
                    <Cell coll={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={profile} alt="avatar" style={{height: '200px'}} />
                        </div>
                    </Cell>
                    <Cell className="resume-col" coll={8}>Right</Cell>
                </Grid>
            </div>
        )
    }
}

export default About;