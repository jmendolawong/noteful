import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import { findFolder, findNote } from '../notes-helper';

class SidebarNotes extends Component {
  static contextType = NotefulContext;

  handleClickBack = () => {
    this.props.history.goBack()
  }
 
  render() {
    const { notes, folders } = this.context
    const { noteId } = this.props.match.params
    console.log('notes')
    console.log(notes)
    console.log(noteId)

    const note = findNote(notes, noteId) || {}
    const thisFolder = findFolder(folders, note.folderId)
    console.log('thisfolder')
    console.log(thisFolder)
    console.log(note)

    return (
      <div className="sidebar_list">
        <button type='button' onClick={this.handleClickBack}>
          Go Back
        </button>
        <h2>Folder x</h2>
      </div>
    );
  }
}

export default SidebarNotes;
