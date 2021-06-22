import React, {Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './resources/profile.png';

class Landing extends Component {
    render() {
        return( 
            <div style={{width: '100%', margin: 'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={profile} alt="profile" className="profile-img"/>

                        <div className="banner-text"> 
                        <h1> Full Stack Developer</h1>
                        <hr/>

                        <p>C | C# | Java | SQL | MongoDB | .NET | Python | React | Git</p>
                        <div className="social-links">
                            {/* LinkedIn Profile */}
                            <a href="https://www.linkedin.com/in/kyle-kriskovich-10715a200/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </a>

                            {/* GitHub Profile */}
                            <a href="https://github.com/kylekriskovich" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github" aria-hidden="true"></i>
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