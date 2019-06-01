import React, { Component } from 'react';
import {Grid, Row, Col, Table, Image} from 'react-bootstrap';
import './index.css';

class GamePanel extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid" fluid="true">
          <Col xs={3} md={3} lg={3}>
              <br/><br/>When I was a child, I spoke like a child, I played computer games like a child, and I wanted to program my own games like a child.
              <br/><br/>As an adult, I find that although there are lots of wonderful frameworks that allow me to program games that would have delighted the childish me,
              making and playing games no longer holds as much fascination.
              <br/><br/>Here are three JavaScript games I wrote and published. I won`t be making games like this anymore, but they were great learning experiences.
          </Col>
          <Col xs={9} md={9} lg={9}>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Engine</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Image alt="The Townfolk Cartel" src={require("./resources/game3.png")}/></td>
                  <td><strong>The Townfolk Cartel</strong></td>
                  <td><a href="https://www.newgrounds.com/portal/view/687176?id=687176" target="_blank" rel="noopener noreferrer">Newgrounds</a></td>
                  <td>Phaser.io</td>
                  <td><p>I never wrote an idle game before, so I made this one as a lark. It proved
                        more popular than the preceding RPGs (and was a lot easier to make).
                        I actually had to make an open-source contribution to the Phaser engine to get this
                        to work how I wanted. Both the game and the plugin I wrote were discussed in <em><a href="https://madmimi.com/p/da6299"
                        target="_blank" rel="noopener noreferrer">this issue of Phaser World</a>.</em></p></td>
                </tr>
                <tr>
                  <td><Image alt="Apprentice Wars" src={require("./resources/game2.png")} /></td>
                  <td><strong>Apprentice Wars</strong></td>
                  <td><a href="https://www.newgrounds.com/portal/view/661204?id=661204" target="_blank" rel="noopener noreferrer">Newgrounds</a></td>
                  <td>Enchant.js</td>
                  <td><p>This RPG game used a vastly improved game engine, most notably a world map that used
                      the <strong>A* algorithm</strong> to move the character to wherever on the screen the player clicked and pointed. I also added
                      standard RPG fare like NPCs on the map and random encounter battles. The story here was more involved,
                      but was not, in my opinion, as focused and straightforward as the storyline in the first one.</p></td>
                </tr>
                <tr>
                  <td><Image alt="The Stranger in Town" src={require("./resources/game1.png")} /></td>
                  <td><strong>The Stranger in Town</strong></td>
                  <td><a href="https://www.newgrounds.com/portal/view/645734?id=645734" target="_blank" rel="noopener noreferrer">Newgrounds</a></td>
                  <td>Enchant.js</td>
                  <td><p>My first traditional RPG game, with some interesting modifications. First, I added a <strong>mystery solving</strong> engine
                    - the goal of this game is to collect clues, logically combine them to come up with other clues,
                    and solve a problem. Second, I added a <strong>conversation</strong> mechanism to allow more interesting
                    NPC interaction than traditional RPGs. However, the core gameplay had serious limitations, which were addressed
                    in the second iteration of the game engine. Also, while it had a focused storyline and goal, the dialogue was too wordy.</p></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GamePanel;
