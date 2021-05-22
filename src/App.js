import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-colour" transparent title="Kyle Kriskovich" style={{color: 'white'}} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">GitHub</Link>
                <Link to="/contact">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Contents">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">GitHub</Link>
                <Link to="/contact">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
