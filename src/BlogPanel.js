import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import './index.css';

class BlogPanel extends Component {

  render() {
    return (
      <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Source Code Thoughts (WordPress)</td>
            <td><a href="https://aphorism44.wordpress.com/" target="_blank" rel="noopener noreferrer">Link</a></td>
            <td><p>My first blog, entirely devoted to coding.</p></td>
          </tr>
          <tr>
            <td>Blogging the Great Books (WordPress)</td>
            <td><a href="https://greatbooksblog981836056.wordpress.com/blog-posts/" target="_blank" rel="noopener noreferrer">Link</a></td>
            <td><p>One of my bucket list items is to read as many of the Classics as I can. Thanks to a cheap Kindle edition, I can read the Harvard Classics. I have a bunch of bibliophile friends, so I created this blog to spur myself on.</p></td>
          </tr>
          <tr>
            <td>My Quora Entries</td>
            <td><a href="https://www.quora.com/profile/Dominic-Jesse" target="_blank" rel="noopener noreferrer">Link</a></td>
            <td><p>Aside from coding, I constantly read on a number of subjects, especially history and <em>Game of Thrones</em>. So, I found Quora addicting. Here`s a link to my posts.</p></td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default BlogPanel;
