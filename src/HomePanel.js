import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './index.css';

class HomePanel extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>New project on GitHub!</h1>
        <p>After reading a somewhat obscure paper on online economics, I created an economic model in Java Spring.</p>
        <p><a href="https://github.com/aphorism44/economyModel" target="_blank" rel="noopener noreferrer">The GitHub repository is here.</a></p>
        <p><a href="https://aphorism44.wordpress.com/2018/02/10/how_to_code_an_economy/?fb_action_ids=1380570552089771&fb_action_types=news.publishes" target="_blank" rel="noopener noreferrer">My blog entry describing the project is here.</a></p>
      </Jumbotron>
    );
  }
}

export default HomePanel;
