import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import profile from './resources/profile.png';

class About extends Component {
    render() {
        return( 
            <div> 
                <Grid>
                    <Cell coll={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={profile} alt="avatar" style={{height: '200px'}} />
                
                            <h2 style={{paddingTop: '2em'}}>Kyle Kriskovich</h2>
                            <h4 style={{color: 'black'}}>Graduate Developer</h4>
                            <hr style={{borderTop: '2px solid #000000', width: '55%', margin: 'auto'}}></hr>
                            <h5>Email</h5>
                            <p>kylebkriskovich@gmail.com</p>
                            <h5>Website</h5>
                            <Link to="/" className="webName">kylekriskovich.com</Link>   
                            <hr style={{borderTop: '2px solid #000000', width: '55%', margin: 'auto'}}></hr>


                        </div>
                    </Cell>
                    <Cell className="resume-col" coll={8}>Right</Cell>
                </Grid>
            </div>
        )
    }
}

export default About;