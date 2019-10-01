import React, { Component } from 'react';
//import './Main.css';

class NoteItem extends Component {
  render() {
    return (
      <div className="noteItem">
        <li key={this.props.id}>
          <h2>{this.props.name}</h2>
          <p>Modified on {this.props.modified}</p>
          <button>Delete Note</button>
        </li>
      </div>
    );
  }
}

export default NoteItem;
