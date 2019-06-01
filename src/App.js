import React, { Component } from 'react';
import { PageHeader, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import HomePanel from './HomePanel';
import AboutPanel from './AboutPanel';
import BlogPanel from './BlogPanel';
import ProgramPanel from './ProgramPanel';
import GamePanel from './GamePanel';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {key: 1};
  }
  handleSelect(key) {
    this.setState({key});
  }
  render() {
    return (
      <div>
        <header>
        <PageHeader>
          Aphorism 44
          <br/><br/>Playing Around with Code...
        </PageHeader>
        <Tabs onSelect={ (e)=>this.handleSelect(e)} activeKey={this.state.key}>
          <Tab eventKey={1} title="Home"><HomePanel/></Tab>
          <Tab eventKey={2} title="About"><AboutPanel/></Tab>
          <Tab eventKey={3} title="Blogs"><BlogPanel/></Tab>
          <Tab eventKey={4} title="Programs"><ProgramPanel/></Tab>
          <Tab eventKey={5} title="Games"><GamePanel/></Tab>
        </Tabs>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
