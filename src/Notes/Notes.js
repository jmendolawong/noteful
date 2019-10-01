import React, { Component } from 'react';
//import './Main.css';
import NoteList from '../NoteList/NoteList';

class Notes extends Component {
  render() {
    return (
      <div className="notes">
        <NoteList notes={this.props.notes}/>
      </div>
    );
  }
}

export default Notes;
