import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

//import './Main.css';

class NoteItem extends Component {
  render() {
    return (
      <div className="noteItem">
        <li key={this.props.id}>
          <Link to={`/notes/${this.props.id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <p>Modified on {this.props.modified}</p>
          <button>Delete Note</button>
        </li>
      </div>
    );
  }
}

export default NoteItem;
