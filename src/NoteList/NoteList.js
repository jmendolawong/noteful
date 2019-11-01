import React, { Component } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import NotefulContext from '../NotefulContext';

class NoteList extends Component {
  static contextType = NotefulContext;

  render() {
  
    const {folderId} = this.props.match.params
    const {notes=[]} = this.context

    const getNotesForFolder = (notes=[], folderId) => (
      (!folderId)
      ? notes
      : notes.filter(note => note.folderId === folderId)
    )

    const notesForFolder = getNotesForFolder(notes, folderId)

    return (
      <div className="noteList">
        <ul className='note_list'>
          {notesForFolder.map(note =>
            <NoteItem {...note} key={note.id} />
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
