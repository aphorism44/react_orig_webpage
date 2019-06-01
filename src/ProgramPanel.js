import React, { Component } from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import './index.css';

class ProgramPanel extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid" fluid="true">
          <Col xs={3} md={3} lg={3}>
              <br/><br/>My Github repository <a href="https://github.com/aphorism44" target="_blank" rel="noopener noreferrer">is right here</a>.
              <br/><br/>Below are some projects that proved useful (at least for a time).
              <br/><br/><strong>More are coming</strong>, especially since I`m not concentrating on programming games anymore.
          </Col>
          <Col xs={9} md={9} lg={9}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Language</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>REST API for Emergent Economy Model</strong></td>
                <td><a href="https://github.com/aphorism44/economyModel" target="_blank" rel="noopener noreferrer">Link</a></td>
                <td>Java (Spring Boot)</td>
                <td><p>This was more of a fun project - I found an interesting paper on economic simulations online, and decided to implement it.
                Unfortunately, this doesn't have many useful applications outside some esoteric academic circles.</p></td>
              </tr>
              <tr>
                <td><strong>Graph Plugin for Phaser.io</strong></td>
                <td><a href="https://github.com/aphorism44/phaser-barchart" target="_blank" rel="noopener noreferrer">Link</a></td>
                <td>JavaScript</td>
                <td><p>When I was building a project using the Phaser.io library, I realized I needed
                some type of graphing functionality to more easily present numeric data. Since
                Phaser.io didn`t have that capability, I made it myself as an open source contribution.</p></td>
              </tr>
              <tr>
                <td><strong>Pathfinding Plugin for Enchant.js</strong></td>
                <td><a href="https://github.com/aphorism44/astar_api_js" target="_blank" rel="noopener noreferrer">Link</a></td>
                <td>JavaScript</td>
                <td><p>Again, I needed something while working on a project.
                 In this case, mobile users needed to be able to move objects around their screen
                  without having to resort to a built-in game pad. So, I implemented the <strong>A* algorithm</strong>.
                  That way, all users had to do was click or tap on the desired location, and the player
                  would automatically move there, avoiding all obstacles. I never entered this into Open Source since
                  the Enchant.js engine was almost dead by then, and someone had already implemented this
                  for the Phaser.io engine.</p></td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProgramPanel;
