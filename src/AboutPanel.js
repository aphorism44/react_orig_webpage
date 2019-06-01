import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './index.css';

class AboutPanel extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid" fluid="true">
          <Col xs={21} md={12} lg={12}>
              <br/><br/>Code is my life - I make software for a living, and work on projects in my free time.
              <br/><br/>On this page, I document some of my varied interests.
              <br/><br/>This latest page is written in React; the last one was in Angular; the one before that, jQuery. I like keeping my frontend up-to-date.
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AboutPanel;
