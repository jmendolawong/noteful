import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
//import './Main.css';

class NoteList extends Component {
  render() {
    return (
      <div className="noteList">
        <ul className='note_list'>
          {this.props.notes.map((note, i) =>
            <NoteItem {...note} key={i} />
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
