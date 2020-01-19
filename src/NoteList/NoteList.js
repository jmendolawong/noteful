import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotefulContext from '../NotefulContext';
import { Link } from 'react-router-dom';
import { folderNotes } from '../notes-helper';


class NoteList extends Component {
  static contextType = NotefulContext;

  render() {

    const { folderId } = this.props.match.params
    const { notes = [] } = this.context

    const notesForFolder = folderNotes(notes, folderId)
    return (
      <div className="noteList">
        <ul className='note_list'>
          {notesForFolder.map(note =>
            <NoteItem {...note} key={note.id} />
          )}
        </ul>
        <Link to={'/addnote'}>
          <button className='add'>Add Note</button>
        </Link>
      </div>
    );
  }
}

export default NoteList;
